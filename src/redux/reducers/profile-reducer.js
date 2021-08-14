import { profileApi } from '../../api/api';


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  posts: [
    { id: 1, text: 'Are you ready?', likesCount: 4 },
    { id: 2, text: 'Go straight forward, please', likesCount: 2 },
    { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
  ],
  userProfile: null,
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 1,
        text: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };

    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };

    case SET_USER_STATUS:
      return { ...state, userProfile: { ...state.userProfile, status: action.userStatus } };

    default:
      return state;
  }
}

export const setNewPostInStore = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })
export const setUserStatus = (userStatus) => ({ type: SET_USER_STATUS, userStatus })

export const getUserProfileThunkCreator = (profileId) => (dispatch) => {
  profileApi.getProfile(profileId)
    .then((response) => {
      dispatch(setUserProfile(response.data));
      profileApi.getProfileStatus(response.data.userId)
        .then((response) => { dispatch(setUserStatus(response.data)) })
    })
}

export const setUserStatusThunkCreator = (statusText) => (dispatch) => {
  profileApi.setProfileStatus(statusText)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(statusText));
      }
    })
}

export default profileReducer;
