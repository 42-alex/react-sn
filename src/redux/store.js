const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';

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
    if (action.type === ADD_POST) {
      const newPost = {
        id: 1,
        text: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.unshift(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this);
    }
    else if (action.type === UPDATE_POST_INPUT) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this);
    }
    else if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: 1,
        message: this._state.dialogsPage.newMessageText,
      }
      this._state.dialogsPage.messages.unshift(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this);
    }
    else if (action.type === UPDATE_MESSAGE_INPUT) {
      this._state.dialogsPage.newMessageText = action.messageText;
      this._callSubscriber(this);
    }
  },
  _callSubscriber() {
    console.log('no subscribers');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostInputActionCreator = (text) => ({
  type: UPDATE_POST_INPUT,
  text: text,
})
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageInputActionCreator = (messageText) => ({
  type: UPDATE_MESSAGE_INPUT,
  messageText: messageText,
})


export default store;
