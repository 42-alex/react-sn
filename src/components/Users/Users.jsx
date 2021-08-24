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
import Paginator from '../common/Paginator/Paginator';

const Users = (props) => {
  const { currentPage, usersOnPage, totalUsersCount, onPageNumberClick } = props;
  const usersItems = props.users.map(
    (user) => (
      <div key={user.id} className={classes.userItem}>
        <div className={classes.userAvatar}>
          <div className={classes.avatarWrapper}>
            <NavLink to={`/profile/${user.id}`}>
              <img src={user.photos.small || defaultAvatar} alt="user avatar" className={classes.avatarImg} />
            </NavLink>
          </div>
          {user.followed
            ? <button
              disabled={props.followingInProgress.includes(user.id)}
              onClick={() => props.unfollowUser(user.id)}
            >Unfollow</button>
            : <button
              disabled={props.followingInProgress.includes(user.id)}
              onClick={() => props.followUser(user.id)}
            >Follow</button>
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
    <Paginator currentPage={currentPage} usersOnPage={usersOnPage} totalUsersCount={totalUsersCount}
               onPageNumberClick={onPageNumberClick} />
    <div className={classes.users}>
      { usersItems }
    </div>
  </>
}

export default Users;