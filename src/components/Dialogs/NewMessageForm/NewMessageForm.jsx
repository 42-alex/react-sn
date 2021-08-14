import { Field, reduxForm } from 'redux-form';


const NewMessageForm = ({handleSubmit}) => {
  return <form onSubmit={handleSubmit}>
    <Field name="newMessageText" component="textarea" />
    <div>
      <input type="submit" value="Send" />
    </div>
  </form>
}

export default reduxForm({form: 'newMessageForm'})(NewMessageForm);
