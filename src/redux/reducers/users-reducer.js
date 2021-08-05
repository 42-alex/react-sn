import { USERS_ON_PAGE } from '../../const/settings';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  usersOnPage: USERS_ON_PAGE,
  isFetching: false,
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

    default:
      return state;
  }
}

export const setUsers = (users, totalUsersCount) => ({ type: SET_USERS, users, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const followUser = (userId) => ({ type: FOLLOW, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW, userId });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });

export default usersReducer;
