export interface ReceivingsIdExpectParams {
  id: number;
}

export interface ReceivingsIdExpectResult {
  createdAt: string;
  creatorName: string;
  doneDate: string;
  id: number;
  receivingCode: string;
  receivingMemos: {
    createdAt: string;
    creatorName: string;
    id: number;
    memo: string;
  };
  receivingProductSets: {
    arrrivalQuantity: number;
    cancelQuantity: number;
    defaultProductCode: string;
    defaultProductName: string;
    doneDate: string;
    expectedQuantity: number;
    id: number;
    loadQuantity: number;
    nonDefectiveQuantity: number;
    notYetArrivalQuantity: number;
    quantity: number;
    resendingQuantity: number;
    status: string;
  };
  scheduledDate: string;
  status: string;
  type: string;
  vendorNames: string[];
}

export interface ReceivingProductParams {
  page: number;
  productSetId: number;
  size: number;
  sortColumns: string[];
  status: string;
}

export interface ReceivingProductResult {
  productDetail: {
    code: string;
    expirationDate: string;
    id: number;
    itemName: string;
    locationCode: string;
    manufactureDate: string;
    marbleMeat: string;
    price: number;
    productMasterCode: string;
    quantity: number;
    rating: string;
    releseDate: string;
    serialNumber: string;
    status: string;
    traceabilityNo: string;
    updatedAt: string;
    vendorName: string;
    weight: number;
    workMethod: string;
  };
}

export interface ReceivingMemoParams {
  id: number;
}

export interface ReceivingMemoResult {
  memo: string;
}
