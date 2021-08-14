import { Field, reduxForm } from 'redux-form';

const NewPostForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <Field name="newPostText" component="textarea" />
      <input type="submit" value="Add new post" />
    </form>
  )
}

export default reduxForm({ form: 'newPostForm' })(NewPostForm);
