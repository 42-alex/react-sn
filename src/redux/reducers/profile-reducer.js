import { profileApi } from '../../api/api';


const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [
    { id: 1, text: 'Are you ready?', likesCount: 4 },
    { id: 2, text: 'Go straight forward, please', likesCount: 2 },
    { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
  ],
  newPostText: '',
  userProfile: null,
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 1,
        text: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: '',
      };

    case UPDATE_POST_INPUT:
      return { ...state, newPostText: action.text };

    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostInputActionCreator = (text) => ({ type: UPDATE_POST_INPUT, text })
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })

export const getUserProfileThunkCreator = (profileId) => (dispatch) => {
  profileApi.getProfile(profileId)
    .then((response) => { dispatch(setUserProfile(response.data)) })
}

export default profileReducer;
