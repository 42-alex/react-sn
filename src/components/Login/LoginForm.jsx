import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <label htmlFor="login">Login</label>
        <Field name="login" type="text" component="input" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" component="input" />
      </div>
      <div>
        <label htmlFor="rememberMe">Remember me</label>
        <Field name="rememberMe" type="checkbox" component="input" />
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
