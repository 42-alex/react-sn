import Users from './Users';
import { connect } from 'react-redux';
import { setUsersAC, followUserAC, unfollowUserAC } from '../../redux/reducers/users-reducer';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});
const mapDispatchToProps = (dispatch) => ({
  setUsers: (usersArr) => {
    const action = setUsersAC(usersArr);
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