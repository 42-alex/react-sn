import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, setUserStatus } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.profileId || this.props.thisProfileId;
    if (profileId) {
      this.props.getUserProfile(profileId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const profileId = this.props.match.params.profileId || this.props.thisProfileId;
    if (this.props.match.url !== prevProps.match.url || prevProps.thisProfileId !== this.props.thisProfileId) {
      this.props.getUserProfile(profileId);
    }
  }

  render() {
    return <Profile userProfile={this.props.userProfile} setUserStatus={this.props.setUserStatus} />
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  thisProfileId: state.auth.id,
})


export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfile, setUserStatus }),
)(ProfileContainer);

