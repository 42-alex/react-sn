import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(el =>
    <DialogItem key={el.id} id={el.id} name={el.name} />
  );
  const messagesElements = props.state.messages.map(el =>
    <Message key={el.id} message={el.message} />
  )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;