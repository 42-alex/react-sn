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

  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 1,
        message: state.newMessageText,
      }
      return {
        ...state,
        messages: [newMessage, ...state.messages ],
        newMessageText: '',
      };

    case UPDATE_MESSAGE_INPUT:
      return { ...state, newMessageText: action.messageText };

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
