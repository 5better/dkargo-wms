import { getReceivingsExpect } from "@/apis/get";
import { QUERY_KEY } from "@/constants/queryKey";
import {
  ReceivingsExpectParams,
  ReceivingsExpectResult,
} from "@/types/Receivings";
import { PaginationResult } from "@/types/Pagination";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

export function useGetReceivingsExpect(params: ReceivingsExpectParams) {
  return useQuery<
    PaginationResult<ReceivingsExpectResult>,
    AxiosError,
    ReceivingsExpectParams
  >(
    [QUERY_KEY.GET_RECEIVINGS_EXPECT, params],
    () =>
      getReceivingsExpect(params).then((res: any) => {
        return res.data.data;
      }),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
