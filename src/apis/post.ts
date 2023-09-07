import { api } from "@/apis";
import { LoginParams, LoginResult } from "@/types/Accounts";
import { ReceivingMemoParams, ReceivingMemoResult } from "@/types/Receiving";

export function postLogin(params: LoginParams) {
  return api.base.post<LoginResult>("/accounts/login", params);
}

export function postReceivingsIdMemo(id: ReceivingMemoParams) {
  return api.base.post<ReceivingMemoResult>(`/receivings/${id}/memo`);
}
