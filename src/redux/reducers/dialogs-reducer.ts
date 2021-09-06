import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'social_network/dialogs/ADD_MESSAGE';

export type DialogType = {
  id: number | string  // uuidv4 returns string type
  name: string
}

export type MessageType = {
  id: number | string  // uuidv4 returns string type
  message: string
}

const initialState = {
  dialogs: [
    { id: 1, name: 'Oliver' },
    { id: 2, name: 'Neil' },
    { id: 3, name: 'Stewart' },
    { id: 4, name: 'Sonya' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Message 1' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What is the capital of Great Britain?' },
  ] as Array<MessageType>,
};

type StateType = typeof initialState;

export type ActionsType =
  | SetNewMessageInStoreActionType;

const dialogsReducer = (state = initialState, action: ActionsType): StateType => {

  switch (action.type) {
    case ADD_MESSAGE:
      const { newMessageId: id, newMessageText: message } = action.payload;
      const newMessage = { id, message }
      return {
        ...state,
        messages: [newMessage, ...state.messages ],
      };

    default:
      return state;
  }
}

type SetNewMessageInStoreActionType = {
  type: typeof ADD_MESSAGE
  payload: {
    newMessageId: string
    newMessageText: string
  }
}
export const setNewMessageInStore = (newMessageText: string): SetNewMessageInStoreActionType => {
  const newMessageId = uuidv4();
  return {
    type: ADD_MESSAGE,
    payload: { newMessageId, newMessageText }
  }
};

export default dialogsReducer;
