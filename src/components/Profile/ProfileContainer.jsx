import React from 'react';
import Profile from './Profile';
import { profileApi } from '../api/api';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import { DEFAULT_PROFILE_ID } from '../../const/settings';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.profileId || DEFAULT_PROFILE_ID;
    profileApi.getProfile(profileId)
      .then((response) => { this.props.setUserProfile(response.data) })
  }

  render() {
    return <Profile userProfile={this.props.userProfile} />
  }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile
})


export default connect(mapStateToProps, { setUserProfile })(ProfileContainerWithRouter);

