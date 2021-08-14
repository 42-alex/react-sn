import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <label htmlFor="loginField">Login</label>
        <Field name="login" id="loginField" type="text" component="input" />
      </div>
      <div>
        <label htmlFor="passwordField">Password</label>
        <Field name="password" id="passwordField" type="password" component="input" />

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
