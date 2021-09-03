import React from 'react';
import cn from 'classnames';
import c from './Paginator.module.css';

type PaginatorPropsType = {
  currentPage: number
  itemsOnPage: number
  totalUsersCount: number
  onPageNumberClick: (pageNumber: number) => void
}

const Paginator: React.FC<PaginatorPropsType> = (props) => {
  const { currentPage, itemsOnPage, totalUsersCount, onPageNumberClick } = props;
  const pagesCount = Math.ceil(totalUsersCount / itemsOnPage);
  const pagesArr = [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2]
    .filter((pageNumber) => pageNumber > 0)
    .filter((pageNumber) => pageNumber <= pagesCount);
  const pageNumberClass = (pageNumber: number) => cn(
    c.pageNumber,
    { [c.selectedPage]: pageNumber === currentPage }
  )

  const pageItems = pagesArr.map((pageNumber) => {
    return (
      <span key={pageNumber} className={pageNumberClass(pageNumber)}
            onClick={() => onPageNumberClick(pageNumber)}
      >
      {pageNumber}
    </span>
    )
  })


  return (
    <div className={c.pagination}>
      {pageItems}
    </div>
  )
}

export default Paginator;