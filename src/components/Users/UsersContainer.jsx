import Users from './Users';
import { connect } from 'react-redux';
import { setUsersAC, followUserAC, unfollowUserAC, setCurrentPageAC } from '../../redux/reducers/users-reducer';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;