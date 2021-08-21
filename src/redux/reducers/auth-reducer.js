import { authApi } from '../../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const UNSET_USER_DATA = 'UNSET_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuthorized: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      const { id, login, email } = action;
      return { ...state, id, login, email, isAuthorized: true };

    case UNSET_USER_DATA:
      return initialState;

    default:
      return state;
  }
}

export const setUserData = (id, login, email) => ({ type: SET_USER_DATA, id, login, email });
export const unsetUserData = () => ({ type: UNSET_USER_DATA });

export const authMe = () => (dispatch) => {
  return authApi.authMe()
    .then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setUserData(id, login, email));
      } else {
        dispatch(unsetUserData());
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authApi.login(email, password, rememberMe)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(authMe());
      } else {
        const message = response.data.messages.length ? response.data.messages[0] : 'Server error';
        dispatch(stopSubmit('loginForm', { _error: message }))
      }
    })
}

export const logout = () => (dispatch) => {
  authApi.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(authMe());
      }
    })
}

export default authReducer;
