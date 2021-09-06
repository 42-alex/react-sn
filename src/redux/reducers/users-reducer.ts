import { USERS_ON_PAGE } from '../../const/settings';
import { usersApi } from '../../api/api';
import { PhotosType } from '../../types/types';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store-redux';

const SET_USERS = 'social_network/users/SET_USERS';
const FOLLOW = 'social_network/users/FOLLOW';
const UNFOLLOW = 'social_network/users/UNFOLLOW';
const SET_CURRENT_PAGE = 'social_network/users/SET_CURRENT_PAGE';
const TOGGLE_FETCHING = 'social_network/users/TOGGLE_FETCHING';
const TOGGLE_USER_FOLLOWING_PROGRESS = 'social_network/users/TOGGLE_USER_FOLLOWING_PROGRESS';

export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: PhotosType
  status: null | string
  followed: boolean
}

const initialState = {
  users: [] as Array<UserType>,
  currentPage: 1,
  totalUsersCount: 0,
  usersOnPage: USERS_ON_PAGE,
  isFetching: false,
  followingInProgress: [] as Array<number>,  // array of user ids
};

type StateType = typeof initialState;
type ActionsType =
  | SetUsersActionType
  | SetCurrentPageActionType
  | FollowUserSuccessActionType
  | UnfollowUserSuccessActionType
  | ToggleFetchingActionType
  | ToggleUserFollowingProgressActionType

const usersReducer = (state = initialState, action: ActionsType): StateType => {
  switch (action.type) {
    case SET_USERS:
      const { users, totalUsersCount } = action.payload;
      return { ...state, users, totalUsersCount};

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.currentPage };

    case FOLLOW:
      return {
        ...state,
        users: (state.users as Array<UserType>).map((el) => {
          return el.id === action.payload.userId
            ? { ...el, followed: true }
            : el;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: (state.users as Array<UserType>).map((el) => {
          return el.id === action.payload.userId
            ? { ...el, followed: false }
            : el;
        })
      };

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };

    case TOGGLE_USER_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isFollowFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(userId => userId !== action.payload.userId)
      };

    default:
      return state;
  }
}

type SetUsersActionType = {
  type: typeof SET_USERS
  payload: {
    users: Array<UserType>
    totalUsersCount: number
  }
}
export const setUsers = (users: Array<UserType>, totalUsersCount: number): SetUsersActionType => (
    { type: SET_USERS, payload: { users, totalUsersCount }}
);

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  payload: {
    currentPage: number
  }
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => (
    { type: SET_CURRENT_PAGE, payload: { currentPage }}
);

type FollowUserSuccessActionType = {
  type: typeof FOLLOW
  payload: {
    userId: number
  }
}
export const followUserSuccess = (userId: number): FollowUserSuccessActionType => (
    { type: FOLLOW, payload: { userId }}
);

type UnfollowUserSuccessActionType = {
  type: typeof UNFOLLOW
  payload: {
    userId: number
  }
}
export const unfollowUserSuccess = (userId: number): UnfollowUserSuccessActionType => (
    { type: UNFOLLOW, payload: { userId }}
);

type ToggleFetchingActionType = {
  type: typeof TOGGLE_FETCHING
  payload: {
    isFetching: boolean
  }
}
export const toggleFetching = (isFetching: boolean): ToggleFetchingActionType => (
    { type: TOGGLE_FETCHING, payload: { isFetching }}
);

type ToggleUserFollowingProgressActionType = {
  type: typeof TOGGLE_USER_FOLLOWING_PROGRESS
  payload: {
    isFollowFetching: boolean
    userId: number
  }
}
export const toggleUserFollowingProgress = (
    isFollowFetching: boolean, userId: number
): ToggleUserFollowingProgressActionType => (
  { type: TOGGLE_USER_FOLLOWING_PROGRESS, payload: { isFollowFetching, userId }}
);

type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsType>;

export const getUsers =
    (currentPage: number, usersOnPage: number): ThunkType =>
        async (dispatch) => {
          dispatch(toggleFetching(true));
          const responseData = await usersApi.getUsers(currentPage, usersOnPage);
          dispatch(setUsers(responseData.items, responseData.totalCount));
          dispatch(toggleFetching(false));
        }

export const followUser = (userId: number): ThunkType =>
    async (dispatch) => {
      dispatch(toggleFetching(true));
      dispatch(toggleUserFollowingProgress(true, userId));
      const responseData = await usersApi.followUser(userId);
      if (responseData.resultCode === 0) {
        dispatch(followUserSuccess(userId));
        dispatch(toggleFetching(false));
        dispatch(toggleUserFollowingProgress(false, userId));
      }
    }

export const unFollowUser = (userId: number): ThunkType =>
    async (dispatch) => {
      dispatch(toggleFetching(true));
      dispatch(toggleUserFollowingProgress(true, userId));
      const responseData = await usersApi.unfollowUser(userId);
      if (responseData.resultCode === 0) {
        dispatch(unfollowUserSuccess(userId));
        dispatch(toggleFetching(false));
        dispatch(toggleUserFollowingProgress(false, userId));
      }
    }


export default usersReducer;
