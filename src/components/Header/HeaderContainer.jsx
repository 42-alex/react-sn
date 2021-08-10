import React from 'react';
import Header from './Header';
import { authMeThunkCreator } from '../../redux/reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunkCreator();
  }

  render () {
    return (
      <Header { ...this.props } />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
  login: state.auth.login,
})

export default connect(
  mapStateToProps,
  { authMeThunkCreator }
)(HeaderContainer);
