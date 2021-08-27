import { authMe } from './auth-reducer';


const SET_APP_INITIALIZATION = 'social_network/app/SET_APP_INITIALIZATION';
const SET_GLOBAL_ERROR = 'social_network/app/SET_GLOBAL_ERROR';

const initialState = {
  initialized: false,
  globalErrorMessage: '',
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_APP_INITIALIZATION:
      return { ...state, initialized: true }
    case SET_GLOBAL_ERROR:
      return { ...state, globalErrorMessage: action.globalErrorMessage }
    default:
      return state;
  }
}

export const setAppInitialization = () => ({
  type: SET_APP_INITIALIZATION,
})

export const setGlobalError = (globalErrorMessage) => ({
  type: SET_GLOBAL_ERROR,
  globalErrorMessage
})

export const initializeApp = () => (dispatch) => {
  const authMePromise = dispatch(authMe());
  Promise.all([authMePromise])
    .then(() => {
      dispatch(setAppInitialization());
    })
}

export default appReducer;
