import { USERS_ON_PAGE } from '../../const/settings';
import { usersApi } from '../../api/api';

const SET_USERS = 'social_network/users/SET_USERS';
const FOLLOW = 'social_network/users/FOLLOW';
const UNFOLLOW = 'social_network/users/UNFOLLOW';
const SET_CURRENT_PAGE = 'social_network/users/SET_CURRENT_PAGE';
const TOGGLE_FETCHING = 'social_network/users/TOGGLE_FETCHING';
const TOGGLE_USER_FOLLOWING_PROGRESS = 'social_network/users/TOGGLE_USER_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  usersOnPage: USERS_ON_PAGE,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const { users, totalUsersCount } = action;
      return { ...state, users, totalUsersCount};

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          return el.id === action.userId
            ? { ...el, followed: true }
            : el;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          return el.id === action.userId
            ? { ...el, followed: false }
            : el;
        })
      };

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_USER_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFollowFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(userId => userId !== action.userId)
      };

    default:
      return state;
  }
}

export const setUsers = (users, totalUsersCount) => ({ type: SET_USERS, users, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const followUserSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowUserSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });
export const toggleUserFollowingProgress = (isFollowFetching, userId) => (
  { type: TOGGLE_USER_FOLLOWING_PROGRESS, isFollowFetching, userId }
);

export const getUsers = (currentPage, usersOnPage) => async (dispatch) => {
  dispatch(toggleFetching(true));
  const getUsersResponse = await usersApi.getUsers(currentPage, usersOnPage);
  dispatch(setUsers(getUsersResponse.data.items, getUsersResponse.data.totalCount));
  dispatch(toggleFetching(false));
}

export const followUser = (userId) => async (dispatch) => {
  dispatch(toggleFetching(true));
  dispatch(toggleUserFollowingProgress(true, userId));
  const followUserResponse = await usersApi.followUser(userId);
  if (followUserResponse.data.resultCode === 0) {
    dispatch(followUserSuccess(userId));
    dispatch(toggleFetching(false));
    dispatch(toggleUserFollowingProgress(false, userId));
  }
}

export const unFollowUser = (userId) => async (dispatch) => {
  dispatch(toggleFetching(true));
  dispatch(toggleUserFollowingProgress(true, userId));
  const unfollowUserResponse = await usersApi.unfollowUser(userId);
  if (unfollowUserResponse.data.resultCode === 0) {
    dispatch(unfollowUserSuccess(userId));
    dispatch(toggleFetching(false));
    dispatch(toggleUserFollowingProgress(false, userId));
  }
}


export default usersReducer;
