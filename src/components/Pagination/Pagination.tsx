// Costum Hooks
import { usePagination, DOTS } from '../../hooks/usePagination';

// Utils
import { v4 as uuidv4 } from 'uuid';

// Type
import { PaginationPropType } from '../../types/components/paginationType';

// Asset
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

export function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 0,
  currentPage,
  pageSize,
  className,
}: PaginationPropType) {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange![paginationRange!.length - 1];

  return (
    <div className='min-w-max'>
      <ul className="flex items-center w-full">
        {/* Left navigation arrow */}
        <li key={uuidv4()}>
          <button
          onClick={onPrevious} 
          className={`bg-slate-100 border border-slate-200 p-1.5 mr-3 flex rounded-md ${currentPage === 1 ? 'pointer-events-none selection:bg-transparent' : ''}`}>
            <img src={arrowLeft} width={16} height={16} />
          </button>
        </li>

        {paginationRange!.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li key={uuidv4()}>
                <button className="bg-slate-100 border border-slate-200 py-1 px-3 mr-3 h-full text-sm flex font-semibold rounded-md">
                  ...
                </button>
              </li>
            );
          }

          return (
            <li key={uuidv4()}>
              <button
                onClick={() => onPageChange(pageNumber)}
                className={`py-1 px-3 mr-3 h-full text-sm flex font-semibold rounded-md ${
                  pageNumber === currentPage
                    ? 'bg-black text-white border border-black'
                    : 'bg-slate-100 border border-slate-200'
                }`}>
                {pageNumber}
              </button>
            </li>
          );
        })}

        {/*  Right Navigation arrow */}
        <li key={uuidv4()}>
          <button
          onClick={onNext} 
          className={`bg-slate-100 border border-slate-200 p-1.5  flex rounded-md ${currentPage === lastPage ? 'pointer-events-none selection:bg-transparent' : ''}`}>
            <img
            className=''
            src={arrowRight} 
            width={16} 
            height={16}/>
          </button>
        </li>
      </ul>
    </div>
  );
}
