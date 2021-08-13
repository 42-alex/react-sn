import LoginForm from './LoginForm';


const Login = () => {
  const onSubmit = (formData) => {
    console.log('formData: ', formData);
  }

  return <div>
    <h2>Fulfil your credential, please</h2>
    <LoginForm onSubmit={onSubmit} />
  </div>
}

export default Login;