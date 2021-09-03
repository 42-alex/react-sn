import React from 'react';
import classes from './Users.module.css';
import Preloader from '../common/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../redux/reducers/users-reducer';

type UsersPropsType = {
  currentPage: number
  usersOnPage: number
  totalUsersCount: number
  users: Array<UserType>
  isFetching: boolean
  followingInProgress: Array<number>
  pageTitle: string
  onPageNumberClick: (currentPage: number) => void
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
}

const Users: React.FC<UsersPropsType> = ({ currentPage, usersOnPage, totalUsersCount,
                                           onPageNumberClick, ...props }) => {
  const usersItems = props.users.map(
    (user) => <User key={user.id} user={user} followingInProgress={props.followingInProgress}
                    followUser={props.followUser} unfollowUser={props.unfollowUser} />
  );

  return <>
    { props.isFetching && <Preloader /> }
    <h2>{ props.pageTitle }</h2>
    <Paginator currentPage={currentPage} itemsOnPage={usersOnPage} totalUsersCount={totalUsersCount}
               onPageNumberClick={onPageNumberClick} />
    <div className={classes.users}>
      { usersItems }
    </div>
  </>
}

export default Users;