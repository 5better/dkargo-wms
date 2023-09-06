import { useMutation } from "react-query";
import { LoginParams, LoginResult } from "@/types/Accounts";
import { AxiosError } from "axios";
import { QUERY_KEY } from "@/constants/queryKey";
import { postLogin } from "@/apis/post";

export function usePostLogin() {
  return useMutation<LoginResult, AxiosError, LoginParams>(
    QUERY_KEY.POST_LOGIN,
    (params) =>
      postLogin(params).then((res) => {
        return res.data;
      })
  );
}
