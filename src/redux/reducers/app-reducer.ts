import { ThunkAction } from 'redux-thunk';
import { authMe } from './auth-reducer';
import { AppStateType } from '../store-redux';


const SET_APP_INITIALIZATION = 'social_network/app/SET_APP_INITIALIZATION';
const SET_GLOBAL_ERROR = 'social_network/app/SET_GLOBAL_ERROR';

type ActionsType =
  | SetAppInitializationActionType
  | SetGlobalErrorActionType

export type StateType = {
  initialized: boolean
  globalErrorMessage: string | undefined
};

const initialState: StateType = {
  initialized: false,
  globalErrorMessage: '',
}

const appReducer = (state = initialState, action: ActionsType): StateType => {
  switch(action.type) {
    case SET_APP_INITIALIZATION:
      return { ...state, initialized: true, }
    case SET_GLOBAL_ERROR:
      return { ...state, globalErrorMessage: action.globalErrorMessage }
    default:
      return state;
  }
}

type SetAppInitializationActionType = {
  type: typeof SET_APP_INITIALIZATION
}
export const setAppInitialization = (): SetAppInitializationActionType => ({
  type: SET_APP_INITIALIZATION,
})

type SetGlobalErrorActionType = {
  type: typeof SET_GLOBAL_ERROR
  globalErrorMessage: string
}
export const setGlobalError = (globalErrorMessage: string): SetGlobalErrorActionType => ({
  type: SET_GLOBAL_ERROR,
  globalErrorMessage
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsType>

export const initializeApp = (): ThunkType => async (dispatch) => {
  await dispatch(authMe());
  dispatch(setAppInitialization());
}

export default appReducer;
