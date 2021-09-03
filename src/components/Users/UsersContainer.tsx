import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentPage,
  getUsers,
  followUser,
  unFollowUser,
  UserType,
} from '../../redux/reducers/users-reducer';
import Users from './Users';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/store-redux';
import {
  selectCurrentPage,
  selectFollowingInProgress,
  selectIsFetching,
  selectTotalUsersCount,
  selectUsers,
  selectUsersOnPage
} from '../../redux/selectors/users-selectors';


type mapStatePropsType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  usersOnPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

type mapDispatchPropsType = {
  setCurrentPage: (currentPage: number) => void
  getUsers: (currentPage: number, usersOnPage: number) => void
  followUser: (userId: number) => void
  unFollowUser: (userId: number) => void
}

type OwnPropsType = {
  pageTitle: string
}


type PropsType = mapStatePropsType & mapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {

  onPageNumberClick = (currentPage: number) => {
    this.props.setCurrentPage(currentPage);
    this.getUsers(currentPage);
  }

  getUsers = (currentPage = this.props.currentPage) => {
    this.props.getUsers(currentPage, this.props.usersOnPage);
  }

  followUser = (userId: number) => {
    this.props.followUser(userId);
  }

  unfollowUser = (userId: number) => {
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
      pageTitle={this.props.pageTitle}
    />
  }
}


const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
  users: selectUsers(state),
  currentPage: selectCurrentPage(state),
  totalUsersCount: selectTotalUsersCount(state),
  usersOnPage: selectUsersOnPage(state),
  isFetching: selectIsFetching(state),
  followingInProgress: selectFollowingInProgress(state),
});


export default compose(
  withAuthRedirect,
  connect<mapStatePropsType, mapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    { setCurrentPage, getUsers, followUser, unFollowUser }
  ))(UsersContainer);