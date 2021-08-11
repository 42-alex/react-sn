import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuthorized) {
        return <Component { ...this.props } />
      } else {
        return <Redirect to='/login' />
      }
    }
  }

  const ConnectedRedirectComponent = connect(
    (state) => ({ isAuthorized: state.auth.isAuthorized })
  )(RedirectComponent);

  return ConnectedRedirectComponent;

}

export default withAuthRedirect;