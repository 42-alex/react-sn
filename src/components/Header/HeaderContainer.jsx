import React from 'react';
import Header from './Header';
import { authMe } from '../../redux/reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
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
  { authMe }
)(HeaderContainer);
