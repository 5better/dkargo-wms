export interface PaginationResult<T> {
  data: T[];
  pagingInfo: {
    hasNext: boolean;
    hasPrevious: boolean;
    isEmpty: boolean;
    isFirst: boolean;
    isLast: boolean;
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
  };
}
