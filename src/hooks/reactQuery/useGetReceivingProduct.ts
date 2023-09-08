import { ReceivingProduct } from "@/apis/get";
import { QUERY_KEY } from "@/constants/queryKey";
import {
  ReceivingProductParams,
  ReceivingProductResult,
} from "@/types/Receiving";
import { PaginationResult } from "@/types/Pagination";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

export function useReceivingProduct(params: ReceivingProductParams) {
  return useQuery<
    PaginationResult<ReceivingProductResult>,
    AxiosError,
    ReceivingProductParams
  >(
    [QUERY_KEY.GET_RECEIVING_PRODUCT, params],
    () =>
      ReceivingProduct(params).then((res: any) => {
        return res.data.data;
      }),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
