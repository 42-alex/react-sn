import { authMe } from './auth-reducer';


const SET_APP_INITIALIZATION = 'social_network/app/SET_APP_INITIALIZATION';
const SET_GLOBAL_ERROR = 'social_network/app/SET_GLOBAL_ERROR';

type ActionType = {
  type: typeof SET_APP_INITIALIZATION | typeof SET_GLOBAL_ERROR
  globalErrorMessage?: string
}

export type StateType = {
  initialized: boolean
  globalErrorMessage: string | undefined
};

const initialState: StateType = {
  initialized: false,
  globalErrorMessage: '',
}

const appReducer = (state = initialState, action: ActionType): StateType => {
  switch(action.type) {
    case SET_APP_INITIALIZATION:
      return { ...state, initialized: true, }
    case SET_GLOBAL_ERROR:
      return { ...state, globalErrorMessage: action.globalErrorMessage }
    default:
      return state;
  }
}

export const setAppInitialization = (): ActionType => ({
  type: SET_APP_INITIALIZATION,
})

export const setGlobalError = (globalErrorMessage: string): ActionType => ({
  type: SET_GLOBAL_ERROR,
  globalErrorMessage
})

export const initializeApp = () => (dispatch: any) => {
  const authMePromise = dispatch(authMe());
  Promise.all([authMePromise])
    .then(() => {
      dispatch(setAppInitialization());
    })
}

export default appReducer;
