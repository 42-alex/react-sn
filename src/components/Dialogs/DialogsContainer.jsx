import Dialogs from './Dialogs';
import {
  addMessageActionCreator,
  updateMessageInputActionCreator
} from '../../redux/reducers/dialogs-reducer';

const DialogsContainer = (props) => {
  const { dialogs, messages, newMessageText } = props.store.getState().dialogsPage;

  const sendMessage = () => {
    const action = addMessageActionCreator();
    props.store.dispatch(action);
  }

  const updateMessageText = (newMessageText) => {
    const action = updateMessageInputActionCreator(newMessageText);
    props.store.dispatch(action);
  }

  return <Dialogs
    dialogs={dialogs}
    messages={messages}
    newMessageText={newMessageText}
    sendMessage={sendMessage}
    updateMessageText={updateMessageText} />
};

export default DialogsContainer;