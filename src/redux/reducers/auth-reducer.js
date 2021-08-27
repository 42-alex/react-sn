import { authApi } from '../../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'social_network/app/SET_USER_DATA';
const UNSET_USER_DATA = 'social_network/app/UNSET_USER_DATA';

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

export const authMe = () => async (dispatch) => {
  const authMeResponse = await authApi.authMe();
  if (authMeResponse.data.resultCode === 0) {
    const { id, login, email } = authMeResponse.data.data;
    dispatch(setUserData(id, login, email));
  } else {
    dispatch(unsetUserData());
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const loginResponse = await authApi.login(email, password, rememberMe);
  if (loginResponse.data.resultCode === 0) {
    dispatch(authMe());
  } else {
    const message = loginResponse.data.messages.length ? loginResponse.data.messages[0] : 'Server error';
    dispatch(stopSubmit('loginForm', { _error: message }))
  }
}

export const logout = () => async (dispatch) => {
  const logoutResponse = await authApi.logout();
  if (logoutResponse.data.resultCode === 0) {
    dispatch(authMe());
  }
}

export default authReducer;
