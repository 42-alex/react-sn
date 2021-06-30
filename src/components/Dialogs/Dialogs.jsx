import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
  return (
    <div>{props.text}</div>
  )
}

const DialogItem = (props) => {
  return (
    <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
  )
}

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem id="1" name="Oliver" />
        <DialogItem id="2" name="Neil" />
        <DialogItem id="3" name="Stewart" />
      </div>
      <div className={classes.messages}>
        <Message text="Message 1" />
        <Message text="How are you?" />
        <Message text="What is the capital of Great Britain?" />
      </div>
    </div>
  );
};

export default Dialogs;