import React from 'react';
import { authApi } from '../../api/api';
import Header from './Header';
import { setUserData, unsetUserData } from '../../redux/reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authApi.authMe()
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          this.props.setUserData(id, login, email);
        } else {
          this.props.unsetUserData();
        }
      })
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

export default connect(mapStateToProps, { setUserData, unsetUserData })(HeaderContainer);
