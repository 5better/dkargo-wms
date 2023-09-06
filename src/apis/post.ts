import { api } from "@/apis";
import { LoginParams, LoginResult } from "@/types/Accounts";

export function postLogin(params: LoginParams) {
  return api.base.post<LoginResult>("/api/accounts/login", params);
}
