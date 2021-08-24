import React from 'react';
import classes from './Users.module.css';
import Preloader from '../common/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {
  const { currentPage, usersOnPage, totalUsersCount, onPageNumberClick } = props;
  const usersItems = props.users.map(
    (user) => <User key={user.id} user={user} followingInProgress={props.followingInProgress}
                    followUser={props.followUser} unfollowUser={props.unfollowUser} />
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