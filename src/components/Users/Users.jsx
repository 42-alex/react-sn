import React from 'react';
import classes from './Users.module.css';
import axios from 'axios';
import defaultAvatar from '../../assets/images/avatar.jpg';
import {
  DEFAULT_USER_STATUS,
  DEFAULT_USER_CONTRY,
  DEFAULT_USER_CITY,
} from '../../const/const';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => this.props.setUsers(response.data.items));
  }

  render () {
    const usersItems = this.props.users?.map(
      (user) => (
        <div key={user.id} className={classes.userItem}>
          <div className={classes.userAvatar}>
            <div className={classes.avatarWrapper}>
              <img src={user.photos.small || defaultAvatar} alt="user avatar" className={classes.avatarImg} />
            </div>
            { user.followed
              ? <button onClick={() => this.props.unfollowUser(user.id)}>Followed</button>
              : <button onClick={() => this.props.followUser(user.id)}>Unfollowed</button>
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

    return <div className={classes.users}>
      { usersItems }
    </div>
  }
}

export default Users;