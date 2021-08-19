import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router-dom';


const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
})

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  return !props.isAuthorized
    ? <div>
      <h2>Fulfil your credential, please</h2>
      <LoginForm onSubmit={onSubmit}/>
    </div>
    : <Redirect to="/profile" />
}

export default connect(mapStateToProps, { login })(Login);