export interface ReceivingsSummaryResult {
  cancelReceivingIdList: number;
  delayReceivingIdList: number;
  doneReceivingIdList: number;
  expectedReceivingIdList: number;
  inProgressReceivingIdList: number;
}

export interface ReceivingsExpectParams {
  chooseIds: boolean;
  direction: string;
  endDate: string;
  page: number;
  searchDateType: string;
  searchIds: number[];
  searchText: string;
  searchTextType: string;
  size: number;
  sortColumns: string[];
  startDate: string;
  statusList: string[];
  typeList: string[];
  vendorName: string;
}

export interface ReceivingsExpectResult {
  arrivalQuantity: number;
  cancelQuantity: number;
  createdAt: string;
  creatorName: string;
  doneDate: string;
  expectedQuantity: number;
  id: number;
  loadQuantity: number;
  memos: {
    createdAt: string;
    creatorName: string;
    id: number;
    memo: string;
    receiveId: number;
  };
  nonDefectiveQuantity: number;
  notYetArrivalQuantity: number;
  productCodeQuantity: number;
  productName: string;
  productNames: string;
  productQuantity: number;
  receivingCode: string;
  resendingQuantity: number;
  scheduledDate: string;
  status: string;
  subsidiaryQuantity: number;
  type: string;
  vendorName: string;
}
