import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from './reducers/app-reducer';
import ThunkMiddleware from 'redux-thunk';
import dialogsReducer from './reducers/dialogs-reducer';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(ThunkMiddleware),
);

// todo remove it in production mode
window.store = store;

export default store;