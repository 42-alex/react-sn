import cn from 'classnames';
import c from './Paginator.module.css';

const Paginator = (props) => {
  const { currentPage, usersOnPage, totalUsersCount, onPageNumberClick } = props;
  const pagesCount = Math.ceil(totalUsersCount / usersOnPage);
  const pagesArr = [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2]
    .filter((pageNumber) => pageNumber > 0)
    .filter((pageNumber) => pageNumber <= pagesCount);
  const pageNumberClass = pageNumber => cn(
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