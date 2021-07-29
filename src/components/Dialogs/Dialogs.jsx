import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map(el =>
    <DialogItem key={el.id} id={el.id} name={el.name} />
  );
  const messagesElements = props.messages.map(el =>
    <Message key={el.id} message={el.message} />
  )

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  const onMessageTextChange = (e) => {
    const newMessageText = e.target.value;
    props.updateMessageText(newMessageText);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
        <div className={classes.newMessageForm}>
          <textarea value={props.newMessageText} onChange={onMessageTextChange} />
          <input type="button" value="Send" onClick={onSendMessageClick} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;