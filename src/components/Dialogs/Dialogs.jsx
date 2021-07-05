import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageInputActionCreator } from '../../redux/reducers/dialogs-reducer';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(el =>
    <DialogItem key={el.id} id={el.id} name={el.name} />
  );
  const messagesElements = props.state.messages.map(el =>
    <Message key={el.id} message={el.message} />
  )

  const onSendMessageClick = () => {
    const action = addMessageActionCreator();
    props.dispatch(action);
  }

  const onMessageTextChange = (e) => {
    const newMessageText = e.target.value;
    const action = updateMessageInputActionCreator(newMessageText);
    props.dispatch(action);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
        <div className={classes.newMessageForm}>
          <textarea value={props.state.newMessageText} onChange={onMessageTextChange} />
          <input type="button" value="Send" onClick={onSendMessageClick} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;