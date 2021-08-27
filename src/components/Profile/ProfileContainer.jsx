import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  setUserStatus,
  updateAvatar,
  setProfileData,
  toggleProfileEditMode,
} from '../../redux/reducers/profile-reducer';
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
    if (this.props.match.url !== prevProps.match.url) {
      this.props.getUserProfile(profileId);
    }
  }

  render() {
    return <Profile userProfile={this.props.userProfile} setUserStatus={this.props.setUserStatus}
                    updateAvatar={this.props.updateAvatar} setProfileData={this.props.setProfileData}
                    profileEditMode={this.props.profileEditMode}
                    toggleProfileEditMode={this.props.toggleProfileEditMode} />
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  profileEditMode: state.profilePage.profileEditMode,
  thisProfileId: state.auth.id,
})


export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps,
    { getUserProfile,
      setUserStatus, updateAvatar,
      setProfileData, toggleProfileEditMode, }
  ),
)(ProfileContainer);

