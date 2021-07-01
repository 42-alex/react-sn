import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { props.state.dialogs.map(el =>
          <DialogItem key={el.id} id={el.id} name={el.name} />
          )
        }
      </div>
      <div className={classes.messages}>
        { props.state.messages.map(el =>
          <Message key={el.id} message={el.message} />
          )
        }
      </div>
    </div>
  );
};

export default Dialogs;