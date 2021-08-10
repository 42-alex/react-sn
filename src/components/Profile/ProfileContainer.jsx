import React from 'react';
import Profile from './Profile';
import { profileApi } from '../../api/api';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.profileId || this.props.thisProfileId;
    if (profileId) {
      profileApi.getProfile(profileId)
        .then((response) => { this.props.setUserProfile(response.data) })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const profileId = this.props.match.params.profileId || this.props.thisProfileId;
    if (this.props.match.url !== prevProps.match.url || prevProps.thisProfileId !== this.props.thisProfileId) {
      profileApi.getProfile(profileId)
        .then((response) => { this.props.setUserProfile(response.data) })
    }
  }

  render() {
    return <Profile userProfile={this.props.userProfile} />
  }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  thisProfileId: state.auth.id,
})


export default connect(mapStateToProps, { setUserProfile })(ProfileContainerWithRouter);

