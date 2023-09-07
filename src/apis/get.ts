import { api } from "@/apis";
import {
  ReceivingProductParams,
  ReceivingProductResult,
  ReceivingsIdExpectParams,
  ReceivingsIdExpectResult,
} from "@/types/Receiving";
import {
  ReceivingsExpectParams,
  ReceivingsExpectResult,
  ReceivingsSummaryResult,
} from "@/types/Receivings";

export function getReceivingsSummary() {
  return api.base.get<ReceivingsSummaryResult>("/receivings/summary");
}

export function getReceivingsExpect(params: ReceivingsExpectParams) {
  return api.base.get<ReceivingsExpectResult>("/receivings/expect", {
    params,
  });
}

export function getReceivingsIdExpect(id: ReceivingsIdExpectParams) {
  return api.base.get<ReceivingsIdExpectResult>(`/receivings/${id}/expect`);
}

export function ReceivingProduct(params: ReceivingProductParams) {
  return api.base.get<ReceivingProductResult>("/receiving-product", { params });
}
