import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

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
  null
)(HeaderContainer);
