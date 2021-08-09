import React from 'react';
import { connect } from 'react-redux';
import {
  setUsers,
  followUser,
  unfollowUser,
  setCurrentPage,
  toggleFetching
} from '../../redux/reducers/users-reducer';
import { usersApi } from '../api/api';
import Users from './Users';

class UsersContainer extends React.Component {

  onPageNumberClick = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.getUsers(currentPage);
  }

  getUsers = (currentPage = this.props.currentPage) => {
    const usersOnPage= this.props.usersOnPage;

    this.props.toggleFetching(true);
    usersApi.getUsers(currentPage, usersOnPage)
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        this.props.toggleFetching(false);
      });
  }

  followUser = (userId) => {
    this.props.toggleFetching(true);
    usersApi.followUser(userId)
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.followUser(userId);
          this.props.toggleFetching(false);
        }
      })
  }

  unfollowUser = (userId) => {
    this.props.toggleFetching(true);
    usersApi.followUser(userId)
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.unfollowUser(userId);
          this.props.toggleFetching(false);
        }
      })
  }

  componentDidMount() {
    this.getUsers();
  }

  render () {
    return <Users
      users={this.props.users}
      currentPage={this.props.currentPage}
      usersOnPage={this.props.usersOnPage}
      totalUsersCount={this.props.totalUsersCount}
      followUser={this.followUser}
      unfollowUser={this.unfollowUser}
      isFetching={this.props.isFetching}
      onPageNumberClick={this.onPageNumberClick}
    />
  }
}


const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  usersOnPage: state.usersPage.usersOnPage,
  isFetching: state.usersPage.isFetching,
});

export default connect(
  mapStateToProps,
  { setUsers, setCurrentPage, followUser, unfollowUser, toggleFetching }
)(UsersContainer);