import axios, { AxiosInstance } from "axios";

export class Base {
  private static setInstance(baseUrl: string) {
    return (path: string) => {
      const instance = axios.create({
        baseURL: `${baseUrl}${path}`,
      });

      instance.interceptors.request.use(
        function (config) {
          const token = localStorage.getItem("token");
          if (token) {
            config.headers.Authorization = "Bearer " + token;
          }

          return config;
        },
        function (error) {
          return Promise.reject(error);
        }
      );

      return instance;
    };
  }

  private readonly baseApi = "http://wms-24.dknote.net:13301";

  protected readonly baseApiInstance = Base.setInstance(this.baseApi);
  public base: AxiosInstance;

  public constructor() {
    this.base = this.baseApiInstance("/api/");
  }
}
