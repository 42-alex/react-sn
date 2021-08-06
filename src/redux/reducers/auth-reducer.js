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

export default authReducer;
