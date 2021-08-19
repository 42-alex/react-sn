import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'ADD_MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: uuidv4(),
        message: action.newMessageText,
      }
      return {
        ...state,
        messages: [newMessage, ...state.messages ],
      };

    default:
      return state;
  }
}

export const setNewMessageInStore = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export default dialogsReducer;
