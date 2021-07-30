import Dialogs from './Dialogs';
import {
  addMessageActionCreator,
  updateMessageInputActionCreator
} from '../../redux/reducers/dialogs-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    const action = addMessageActionCreator();
    dispatch(action);
  },
  updateMessageText: (newMessageText) => {
    const action = updateMessageInputActionCreator(newMessageText);
    dispatch(action);
  }
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;