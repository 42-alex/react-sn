import { Field, reduxForm } from 'redux-form';
import ValidatedInput from '../../common/ValidatedInput/ValidatedInput';
import { maxLength10, required } from '../../../utils/validators';


const NewMessageForm = ({handleSubmit}) => {
  return <form onSubmit={handleSubmit}>
    <Field
      element="textarea"
      name="newMessageText"
      component={ ValidatedInput }
      validate={[ required, maxLength10 ]}
    />
    <div>
      <input type="submit" value="Send" />
    </div>
  </form>
}

export default reduxForm({form: 'newMessageForm'})(NewMessageForm);
