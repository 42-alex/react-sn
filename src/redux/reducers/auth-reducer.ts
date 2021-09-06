import { authApi } from '../../api/api';
import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store-redux';

const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const UNSET_USER_DATA = 'social_network/auth/UNSET_USER_DATA';
const SET_CAPTCHA_URL = 'social_network/auth/SET_CAPTCHA_URL';


const initialState = {
  id: null as number | null | undefined,
  login: null as string | null | undefined,
  email: null as string | null | undefined,
  isAuthorized: false,
  captchaUrl: null as string | null | undefined,
};

type StateType = typeof initialState;

type ActionsType =
  | SetUserDataActionType
  | unsetUserDataActionType
  | setCaptchaUrlActionType

const authReducer = (state = initialState, action: ActionsType): StateType => {
  switch (action.type) {
    case SET_USER_DATA:
      const { id, login, email } = action.payload;
      return { ...state, id, login, email, isAuthorized: true };

    case UNSET_USER_DATA:
      return initialState;

    case SET_CAPTCHA_URL:
      return { ...state, captchaUrl: action.payload.captchaUrl };

    default:
      return state;
  }
}

type SetUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: { id: number, login: string, email: string }
}
export const setUserData = (id: number, login: string, email: string): SetUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { id, login, email }
});

type unsetUserDataActionType = {
  type: typeof UNSET_USER_DATA
}
export const unsetUserData = (): unsetUserDataActionType => ({ type: UNSET_USER_DATA });

type setCaptchaUrlActionType = {
  type: typeof SET_CAPTCHA_URL
  payload: { captchaUrl: string }
}
export const setCaptchaUrl = (captchaUrl: string): setCaptchaUrlActionType => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl }
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsType>
export const authMe = (): ThunkType => async (dispatch) => {
  const authMeResponse = await authApi.authMe();
  if (authMeResponse.data.resultCode === 0) {
    const { id, login, email } = authMeResponse.data.data;
    dispatch(setUserData(id, login, email));
  } else {
    dispatch(unsetUserData());
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const captchaUrlResponse = await authApi.getCaptchaUrl();
  dispatch(setCaptchaUrl(captchaUrlResponse.data.url))
}

type LoginDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

export const login = (loginData: LoginDataType): ThunkType => async (dispatch) => {
  const loginResponse = await authApi.login(loginData);
  const resultCode = loginResponse.data.resultCode;
  if (resultCode === 0) {
    await dispatch(authMe());
  } else {
    if(resultCode === 10) {
      await dispatch(getCaptchaUrl());
    }
    const message = loginResponse.data.messages.length ? loginResponse.data.messages[0] : 'Server error';
    dispatch(stopSubmit('loginForm', { _error: message }))
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  const logoutResponse = await authApi.logout();
  if (logoutResponse.data.resultCode === 0) {
    await dispatch(authMe());
  }
}

export default authReducer;
