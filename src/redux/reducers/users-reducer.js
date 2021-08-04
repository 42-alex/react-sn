const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [ ...action.users ]};

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

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followUserAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowUserAC = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer;
