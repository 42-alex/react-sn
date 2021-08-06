import React from 'react';
import classes from './Users.module.css';
import defaultAvatar from '../../assets/images/avatar.jpg';
import {
  DEFAULT_USER_STATUS,
  DEFAULT_USER_CONTRY,
  DEFAULT_USER_CITY,
} from '../../const/settings';
import Preloader from '../common/Preloader';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  const { currentPage, usersOnPage, totalUsersCount } = props;
  const pagesCount = Math.ceil(totalUsersCount / usersOnPage);
  const pagesArr = [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2]
    .filter((pageNumber) => pageNumber > 0)
    .filter((pageNumber) => pageNumber <= pagesCount);

  const pageItems = pagesArr.map((pageNumber) => {
    return <span className={ `${classes.pageNumber} ${pageNumber === currentPage && classes.selectedPage}` }
                 onClick={() => props.onPageNumberClick(pageNumber)}
    >
      { pageNumber }
    </span>
  })

  const usersItems = props.users.map(
    (user) => (
      <div key={user.id} className={classes.userItem}>
        <div className={classes.userAvatar}>
          <div className={classes.avatarWrapper}>
            <NavLink to={`/profile/${user.id}`}>
              <img src={user.photos.small || defaultAvatar} alt="user avatar" className={classes.avatarImg} />
            </NavLink>
          </div>
          { user.followed
            ? <button onClick={() => props.unfollowUser(user.id)}>Followed</button>
            : <button onClick={() => props.followUser(user.id)}>Unfollowed</button>
          }
        </div>
        <div className={classes.userInfo}>
          <div className={ classes.mainInfo }>
            <div className={ classes.userName }>{ user.name }</div>
            <div className={ classes.userStatus }>{ user.status || DEFAULT_USER_STATUS }</div>
          </div>
          <div className={ classes.locationInfo }>
            <div className={ classes.userCountry }>{ DEFAULT_USER_CONTRY }</div>
            <div className={ classes.userCity }>{ DEFAULT_USER_CITY }</div>
          </div>
        </div>
      </div>
    )
  );

  return <>
    { props.isFetching && <Preloader /> }
    <div className={classes.pagination}>
        { pageItems }
    </div>
    <div className={classes.users}>
      { usersItems }
    </div>
  </>
}

export default Users;