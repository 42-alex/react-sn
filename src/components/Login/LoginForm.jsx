import { Field, reduxForm } from 'redux-form';
import ValidatedInput from '../common/ValidatedInput/ValidatedInput';
import { required, maxLength25 } from '../../utils/validators';
import c from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <label htmlFor="loginField">Email</label>
        <Field
          element="input"
          name="email"
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
      { props.error && <span className={c.loginServerError}>{ props.error }</span> }
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
