import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import NewMessageForm from './NewMessageForm/NewMessageForm';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map(el =>
    <DialogItem key={el.id} id={el.id} name={el.name} />
  );
  const messagesElements = props.messages.map(el =>
    <Message key={el.id} message={el.message} />
  )

  const onFormSubmit = (formData) => {
    props.setNewMessageInStore(formData.newMessageText);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
        <NewMessageForm onSubmit={ onFormSubmit } />
      </div>
    </div>
  );
};

export default Dialogs;