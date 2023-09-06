export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResult {
  code: number;
  message: string;
  timestamp: string;
  data: LoginParams;
}
