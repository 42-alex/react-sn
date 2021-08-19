import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentPage,
  getUsers,
  followUser,
  unFollowUser,
} from '../../redux/reducers/users-reducer';
import Users from './Users';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {

  onPageNumberClick = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.getUsers(currentPage);
  }

  getUsers = (currentPage = this.props.currentPage) => {
    const usersOnPage= this.props.usersOnPage;
    this.props.getUsers(currentPage, usersOnPage);
  }

  followUser = (userId) => {
    this.props.followUser(userId);
  }

  unfollowUser = (userId) => {
    this.props.unFollowUser(userId);
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


export default compose(
  withAuthRedirect,
  connect(
    mapStateToProps,
    { setCurrentPage, getUsers, followUser, unFollowUser }
  ))(UsersContainer);