import { authMe } from './auth-reducer';


const SET_APP_INITIALIZATION = 'SET_APP_INITIALIZATION';

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_APP_INITIALIZATION:
      return { ...state, initialized: true }
    default:
      return state;
  }
}

export const setAppInitialization = () => ({
  type: SET_APP_INITIALIZATION,
})

export const initializeApp = () => (dispatch) => {
  const authMePromise = dispatch(authMe());
  Promise.all([authMePromise])
    .then(() => {
      dispatch(setAppInitialization());
    })
}

export default appReducer;
