import { USERS_ON_PAGE } from '../../const/settings';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  usersOnPage: USERS_ON_PAGE,
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

    default:
      return state;
  }
}

export const setUsersAC = (users, totalUsersCount) => ({ type: SET_USERS, users, totalUsersCount });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const followUserAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowUserAC = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer;
