import React from 'react';
import classes from './Users.module.css';
import axios from 'axios';
import defaultAvatar from '../../assets/images/avatar.jpg';
import {
  DEFAULT_USER_STATUS,
  DEFAULT_USER_CONTRY,
  DEFAULT_USER_CITY,
} from '../../const/settings';

class Users extends React.Component {

  onPageClick = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.getUsers(currentPage);
  }

  getUsers = (currentPage = this.props.currentPage) => {
    const usersOnPage= this.props.usersOnPage;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${usersOnPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  componentDidMount() {
    this.getUsers();
  }

  render () {
    const { currentPage, usersOnPage, totalUsersCount } = this.props;
    const pagesCount = Math.ceil(totalUsersCount / usersOnPage);
    const pagesArr = [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2]
      .filter((pageNumber) => pageNumber > 0)
      .filter((pageNumber) => pageNumber <= pagesCount);

    const pageItems = pagesArr.map((pageNumber) => {
      return <span className={ `${classes.pageNumber} ${pageNumber === currentPage && classes.selectedPage}` }
                   onClick={() => this.onPageClick(pageNumber)}
      >
        { pageNumber }
      </span>
    })
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

    return <>
      <div className={classes.pagination}>
          { pageItems }
      </div>
      <div className={classes.users}>
        { usersItems }
      </div>
    </>
  }
}

export default Users;