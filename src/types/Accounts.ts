export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResult {
  access_token: string;
  refresh_token: string;
}
