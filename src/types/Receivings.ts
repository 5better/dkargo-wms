export interface ReceivingsParams {
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

export interface ReceivingsResult {
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
}
