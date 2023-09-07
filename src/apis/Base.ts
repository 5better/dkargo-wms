import axios, { AxiosInstance } from "axios";

export class Base {
  private static setInstance(baseUrl: string) {
    return (path: string) => {
      const instance = axios.create({
        baseURL: `${baseUrl}${path}`,
      });

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
