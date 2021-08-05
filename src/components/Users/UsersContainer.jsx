import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, followUserAC, unfollowUserAC, setCurrentPageAC } from '../../redux/reducers/users-reducer';
import axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

  onPageNumberClick = (currentPage) => {
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
    return <Users
      users={this.props.users}
      currentPage={this.props.currentPage}
      usersOnPage={this.props.usersOnPage}
      totalUsersCount={this.props.totalUsersCount}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      onPageNumberClick={this.onPageNumberClick}
    />
  }
}


const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  usersOnPage: state.usersPage.usersOnPage,
});
const mapDispatchToProps = (dispatch) => ({
  setUsers: (usersArr, totalUsersCount) => {
    const action = setUsersAC(usersArr, totalUsersCount);
    dispatch(action);
  },
  setCurrentPage: (currentPage) => {
    const action = setCurrentPageAC(currentPage);
    dispatch(action);
  },
  followUser: (userId) => {
    const action = followUserAC(userId);
    dispatch(action);
  },
  unfollowUser: (userId) => {
    const action = unfollowUserAC(userId);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);