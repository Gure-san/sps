type PaginationPropType = {
  onPageChange: any, // ubah en nang react dispatch engkok
  totalCount: number,
  currentPage: number,
  pageSize: number,
  siblingCount?: number,
  className?: string 
}

export {
  PaginationPropType
}