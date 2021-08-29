import { authApi } from '../../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const UNSET_USER_DATA = 'social_network/auth/UNSET_USER_DATA';
const SET_CAPTCHA_URL = 'social_network/auth/SET_CAPTCHA_URL';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuthorized: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      const { id, login, email } = action;
      return { ...state, id, login, email, isAuthorized: true };

    case UNSET_USER_DATA:
      return initialState;

    case SET_CAPTCHA_URL:
      return { ...state, captchaUrl: action.captchaUrl };

    default:
      return state;
  }
}

export const setUserData = (id, login, email) => ({ type: SET_USER_DATA, id, login, email });
export const unsetUserData = () => ({ type: UNSET_USER_DATA });
export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, captchaUrl });

export const authMe = () => async (dispatch) => {
  const authMeResponse = await authApi.authMe();
  if (authMeResponse.data.resultCode === 0) {
    const { id, login, email } = authMeResponse.data.data;
    dispatch(setUserData(id, login, email));
  } else {
    dispatch(unsetUserData());
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const captchaUrlResponse = await authApi.getCaptchaUrl();
  dispatch(setCaptchaUrl(captchaUrlResponse.data.url))
}

export const login = (loginData) => async (dispatch) => {
  const loginResponse = await authApi.login(loginData);
  const resultCode = loginResponse.data.resultCode;
  if (resultCode === 0) {
    dispatch(authMe());
  } else {
    if(resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
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
