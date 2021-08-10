import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentPage,
  getUsersThunkCreator,
  followUserThunkCreator,
  unFollowUserThunkCreator,
} from '../../redux/reducers/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {

  onPageNumberClick = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.getUsers(currentPage);
  }

  getUsers = (currentPage = this.props.currentPage) => {
    const usersOnPage= this.props.usersOnPage;
    this.props.getUsersThunkCreator(currentPage, usersOnPage);
  }

  followUser = (userId) => {
    this.props.followUserThunkCreator(userId);
  }

  unfollowUser = (userId) => {
    this.props.unFollowUserThunkCreator(userId);
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
      followingInProgress={this.props.followingInProgress}
    />
  }
}


const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  usersOnPage: state.usersPage.usersOnPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

export default connect(
  mapStateToProps,
  { setCurrentPage, getUsersThunkCreator,
    followUserThunkCreator, unFollowUserThunkCreator }
)(UsersContainer);