import React from 'react';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../assets/images/avatar.jpg';
import { DEFAULT_USER_CITY, DEFAULT_USER_CONTRY, DEFAULT_USER_STATUS } from '../../const/settings';
import classes from './User.module.css';
import { UserType } from '../../redux/reducers/users-reducer';

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, followUser, unfollowUser }) => {
  return (
    <div key={user.id} className={classes.userItem}>
      <div className={classes.userAvatar}>
        <div className={classes.avatarWrapper}>
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.photos.small || defaultAvatar} alt="user avatar" className={classes.avatarImg}/>
          </NavLink>
        </div>
        {user.followed
          ? <button
            disabled={followingInProgress.includes(user.id)}
            onClick={() => unfollowUser(user.id)}
          >Unfollow</button>
          : <button
            disabled={followingInProgress.includes(user.id)}
            onClick={() => followUser(user.id)}
          >Follow</button>
        }
      </div>
      <div className={classes.userInfo}>
        <div className={classes.mainUserInfo}>
          <div className={classes.userName}>{user.name}</div>
          <div className={classes.userStatus}>{user.status || DEFAULT_USER_STATUS}</div>
        </div>
        <div className={classes.locationInfo}>
          <div className={classes.userCountry}>{DEFAULT_USER_CONTRY}</div>
          <div className={classes.userCity}>{DEFAULT_USER_CITY}</div>
        </div>
      </div>
    </div>
  )
}

export default User;
