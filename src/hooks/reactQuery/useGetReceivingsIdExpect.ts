import { getReceivingsIdExpect } from "@/apis/get";
import { QUERY_KEY } from "@/constants/queryKey";
import { PaginationResult } from "@/types/Pagination";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import {
  ReceivingsIdExpectParams,
  ReceivingsIdExpectResult,
} from "@/types/Receiving";

export function useGetReceivingsIdExpect(params: ReceivingsIdExpectParams) {
  return useQuery<
    PaginationResult<ReceivingsIdExpectResult>,
    AxiosError,
    ReceivingsIdExpectParams
  >(QUERY_KEY.GET_RECEIVINGS_ID_EXPECT, () =>
    getReceivingsIdExpect(params).then((res: any) => {
      return res.data;
    })
  );
}
