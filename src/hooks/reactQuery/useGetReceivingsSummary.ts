import { getReceivingsSummary } from "@/apis/get";
import { QUERY_KEY } from "@/constants/queryKey";
import { ReceivingsSummaryResult } from "@/types/Receivings";
import { PaginationResult } from "@/types/Pagination";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

export function useGetReceivingsSummary() {
  return useQuery<PaginationResult<ReceivingsSummaryResult>, AxiosError>(
    QUERY_KEY.GET_RECEIVNGS_SUMMARY,
    () =>
      getReceivingsSummary().then((res: any) => {
        return res.data;
      })
  );
}
