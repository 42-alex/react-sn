import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { getCaptchaUrl, login } from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router-dom';


const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
  captchaUrl: state.auth.captchaUrl,
})

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);
  }

  return !props.isAuthorized
    ? <div>
      <h2>Fulfil your credential, please</h2>
      <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} getCaptchaUrl={props.getCaptchaUrl} />
    </div>
    : <Redirect to="/profile" />
}

export default connect(mapStateToProps, { login, getCaptchaUrl })(Login);