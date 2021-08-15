import { Field, reduxForm } from 'redux-form';
import ValidatedInput from '../../../common/ValidatedInput/ValidatedInput';
import { required, maxLength10 } from '../../../../utils/validators';

const NewPostForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <Field
        element="textarea"
        name="newPostText"
        component={ ValidatedInput }
        validate={[ required, maxLength10 ]}
      />
      <input type="submit" value="Add new post" />
    </form>
  )
}

export default reduxForm({ form: 'newPostForm' })(NewPostForm);
