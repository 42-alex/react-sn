import classes from './Paginator.module.css';

const Paginator = (props) => {
  const { currentPage, usersOnPage, totalUsersCount, onPageNumberClick } = props;
  const pagesCount = Math.ceil(totalUsersCount / usersOnPage);
  const pagesArr = [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2]
    .filter((pageNumber) => pageNumber > 0)
    .filter((pageNumber) => pageNumber <= pagesCount);

  const pageItems = pagesArr.map((pageNumber) => {
    return (
      <span className={`${classes.pageNumber} ${pageNumber === currentPage ? classes.selectedPage : ''}`}
            onClick={() => onPageNumberClick(pageNumber)}
      >
      {pageNumber}
    </span>
    )
  })


  return (
    <div className={classes.pagination}>
      {pageItems}
    </div>
  )
}

export default Paginator;