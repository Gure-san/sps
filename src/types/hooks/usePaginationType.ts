type RangePropType = (start: number, end: number) => number[];

type UsePaginationPropType = {
  totalCount: number ,
  pageSize: number ,
  siblingCount: number ,
  currentPage: number 
}

export {
  UsePaginationPropType,
  RangePropType
}