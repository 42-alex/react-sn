import { Field, reduxForm } from 'redux-form';
import ValidatedInput from '../common/ValidatedInput/ValidatedInput';
import { required, maxLength25 } from '../../utils/validators';

const LoginForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <label htmlFor="loginField">Login</label>
        <Field
          element="input"
          name="login"
          id="loginField"
          type="text"
          component={ ValidatedInput }
          validate={[ required, maxLength25 ]}
        />
      </div>
      <div>
        <label htmlFor="passwordField">Password</label>
        <Field
          element="input"
          name="password"
          id="passwordField"
          type="password"
          component={ ValidatedInput }
          validate={[ required, maxLength25 ]}
        />
      </div>
      <div>
        <label htmlFor="rememberMeField">Remember me</label>
        <Field name="rememberMe" id="rememberMeField" type="checkbox" component="input" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

const LoginFormContainer = reduxForm({
  form: 'loginForm',
})(LoginForm);

export default LoginFormContainer;
