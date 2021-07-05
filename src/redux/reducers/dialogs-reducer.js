const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 1,
        message: state.newMessageText,
      }
      state.messages.unshift(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_MESSAGE_INPUT:
      state.newMessageText = action.messageText;
      return state;

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
