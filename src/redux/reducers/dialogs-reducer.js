const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case ADD_MESSAGE:
      newState = { ...state };
      newState.messages = [ ...state.messages ];
      const newMessage = {
        id: 1,
        message: state.newMessageText,
      }
      newState.messages.unshift(newMessage);
      newState.newMessageText = '';
      return newState;

    case UPDATE_MESSAGE_INPUT:
      newState = { ...state };
      newState.newMessageText = action.messageText;
      return newState;

    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageInputActionCreator = (messageText) => ({
  type: UPDATE_MESSAGE_INPUT,
  messageText: messageText,
})

export default dialogsReducer;
