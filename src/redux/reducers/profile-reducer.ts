import { profileApi } from '../../api/api';
import { v4 as uuidv4 } from 'uuid';
import { stopSubmit } from 'redux-form';
import { PhotosType } from '../../types/types';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store-redux';


const ADD_POST = 'social_network/profile/ADD_POST';
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social_network/profile/SET_USER_STATUS';
const UPDATE_AVATAR = 'social_network/profile/UPDATE_AVATAR';
const TOGGLE_EDIT_MODE = 'social_network/profile/TOGGLE_EDIT_MODE';

type PostType = {
  id: string
  text: string
  likesCount: number
}

type ContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type UserProfileType = {
  aboutMe: string | null
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number
  status?: string | null
  contacts: ContactsType
  photos?: PhotosType
}
// todo: if UserProfileType.status and UserProfileType.photos are required then the error occurred
// in reducers case "SET_USER_PROFILE"

const initialState = {
  posts: [
    { id: '1', text: 'Are you ready?', likesCount: 4 },
    { id: '2', text: 'Go straight forward, please', likesCount: 2 },
    { id: '3', text: 'Where is the bathroom?', likesCount: 0 },
  ] as Array<PostType>,
  userProfile: null as null | UserProfileType,
  profileEditMode: false,
};

type StateType = typeof initialState;

type ActionsType =
  | SetNewPostInStoreActionType
  | SetUserProfileSuccessActionType
  | SetUserStatusSuccessActionType
  | UpdateAvatarSuccessActionType
  | ToggleProfileEditModeActionType

const profileReducer = (state = initialState, action: ActionsType): StateType => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: action.payload.newPostId,
        text: action.payload.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };

    case SET_USER_PROFILE:
      return { ...state, userProfile: action.payload.userProfile };

    case SET_USER_STATUS:
      return {
        ...state,
        userProfile: { ...state.userProfile, status: action.payload.userStatus } as UserProfileType };

    case UPDATE_AVATAR:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.payload.userProfilePhotos } as UserProfileType };

    case TOGGLE_EDIT_MODE:
      return { ...state, profileEditMode: !state.profileEditMode };

    default:
      return state;
  }
}

type SetNewPostInStoreActionType = {
  type: typeof ADD_POST
  payload: {
    newPostId: string
    newPostText: string
  }
}
export const setNewPostInStore = (newPostText: string): SetNewPostInStoreActionType => {
  const newPostId = uuidv4();
  return { type: ADD_POST, payload: { newPostId, newPostText } }
};

type SetUserProfileSuccessActionType = {
  type: typeof SET_USER_PROFILE
  payload: {
    userProfile: ProfileDataType
  }
}
export const setUserProfileSuccess = (userProfile: ProfileDataType): SetUserProfileSuccessActionType => (
    { type: SET_USER_PROFILE, payload: { userProfile }}
)

type SetUserStatusSuccessActionType = {
  type: typeof SET_USER_STATUS
  payload: {
    userStatus: string
  }
}
export const setUserStatusSuccess = (userStatus: string): SetUserStatusSuccessActionType => (
    { type: SET_USER_STATUS, payload: { userStatus }}
)

type UpdateAvatarSuccessActionType = {
  type: typeof UPDATE_AVATAR
  payload: {
    userProfilePhotos: PhotosType
  }
}
export const updateAvatarSuccess = (userProfilePhotos: PhotosType): UpdateAvatarSuccessActionType => (
    { type: UPDATE_AVATAR, payload: { userProfilePhotos }}
)

type ToggleProfileEditModeActionType = {
  type: typeof TOGGLE_EDIT_MODE
}
export const toggleProfileEditMode = (): ToggleProfileEditModeActionType => ({ type: TOGGLE_EDIT_MODE })

type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsType>
export const getUserProfile = (profileId: number): ThunkType => async (dispatch) => {
  const getProfileResponse = await profileApi.getProfile(profileId);
  dispatch(setUserProfileSuccess(getProfileResponse.data));
  const getProfileStatusResponse = await profileApi.getProfileStatus(getProfileResponse.data.userId);
  dispatch(setUserStatusSuccess(getProfileStatusResponse.data));
}

export const setUserStatus = (statusText: string): ThunkType => async (dispatch) => {
  const setProfileStatusResponse = await profileApi.setProfileStatus(statusText)
  if (setProfileStatusResponse.data.resultCode === 0) {
    dispatch(setUserStatusSuccess(statusText));
  }
}

export const updateAvatar = (avatarFile: any): ThunkType => async (dispatch) => {
  const updateAvatarResponse = await profileApi.updateAvatar(avatarFile)
  if (updateAvatarResponse.data.resultCode === 0) {
    dispatch(updateAvatarSuccess(updateAvatarResponse.data.data.photos));
  }
}

export type ProfileDataType = {
  aboutMe: string | null
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number
  contacts: ContactsType
}

export const setProfileData = (profileData: ProfileDataType): ThunkType => async (dispatch) => {
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
