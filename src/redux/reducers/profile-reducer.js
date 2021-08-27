import { profileApi } from '../../api/api';
import { v4 as uuidv4 } from 'uuid';
import { stopSubmit } from 'redux-form';


const ADD_POST = 'social_network/app/ADD_POST';
const SET_USER_PROFILE = 'social_network/app/SET_USER_PROFILE';
const SET_USER_STATUS = 'social_network/app/SET_USER_STATUS';
const UPDATE_AVATAR = 'social_network/app/UPDATE_AVATAR';
const TOGGLE_EDIT_MODE = 'social_network/app/TOGGLE_EDIT_MODE';

const initialState = {
  posts: [
    { id: 1, text: 'Are you ready?', likesCount: 4 },
    { id: 2, text: 'Go straight forward, please', likesCount: 2 },
    { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
  ],
  userProfile: null,
  profileEditMode: false,
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: uuidv4(),
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

    case UPDATE_AVATAR:
      return { ...state, userProfile: { ...state.userProfile, photos: action.userProfilePhotos } };

    case TOGGLE_EDIT_MODE:
      return { ...state, profileEditMode: !state.profileEditMode };

    default:
      return state;
  }
}

export const setNewPostInStore = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfileSuccess = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })
export const setUserStatusSuccess = (userStatus) => ({ type: SET_USER_STATUS, userStatus })
export const updateAvatarSuccess = (userProfilePhotos) => ({ type: UPDATE_AVATAR, userProfilePhotos })
export const toggleProfileEditMode = () => ({ type: TOGGLE_EDIT_MODE })

export const getUserProfile = (profileId) => async (dispatch) => {
  const getProfileResponse = await profileApi.getProfile(profileId);
  dispatch(setUserProfileSuccess(getProfileResponse.data));
  const getProfileStatusResponse = await profileApi.getProfileStatus(getProfileResponse.data.userId);
  dispatch(setUserStatusSuccess(getProfileStatusResponse.data));
}

export const setUserStatus = (statusText) => async (dispatch) => {
  const setProfileStatusResponse = await profileApi.setProfileStatus(statusText)
  if (setProfileStatusResponse.data.resultCode === 0) {
    dispatch(setUserStatusSuccess(statusText));
  }
}

export const updateAvatar = (avatarFile) => async (dispatch) => {
  const updateAvatarResponse = await profileApi.updateAvatar(avatarFile)
  if (updateAvatarResponse.data.resultCode === 0) {
    dispatch(updateAvatarSuccess(updateAvatarResponse.data.data.photos));
  }
}

export const setProfileData = (profileData) => async (dispatch) => {
  const setProfileDataResponse = await profileApi.setProfileData(profileData)
  if (setProfileDataResponse.data.resultCode === 0) {
    dispatch(setUserProfileSuccess(profileData));
    dispatch(toggleProfileEditMode());
  } else {
    const message = setProfileDataResponse.data.messages.length
      ? setProfileDataResponse.data.messages[0]
      : 'Server error';
    dispatch(stopSubmit('profileForm', {'_error': message}))
  }
}

export default profileReducer;
