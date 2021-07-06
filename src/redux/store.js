import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Are you ready?', likesCount: 4 },
        { id: 2, text: 'Go straight forward, please', likesCount: 2 },
        { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Oliver' },
        { id: 2, name: 'Neil' },
        { id: 3, name: 'Stewart' },
        { id: 4, name: 'Sonya' },
      ],
      messages: [
        { id: 1, message: 'Message 1' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'What is the capital of Great Britain?' },
      ],
      newMessageText: '',
    },
  },
  getState() {
    return this._state;
  },
  dispatch (action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this);
  },
  _callSubscriber() {
    console.log('no subscribers');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}



export default store;
