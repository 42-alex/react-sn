import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.profileId || this.props.thisProfileId;
    if (profileId) {
      this.props.getUserProfileThunkCreator(profileId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const profileId = this.props.match.params.profileId || this.props.thisProfileId;
    if (this.props.match.url !== prevProps.match.url || prevProps.thisProfileId !== this.props.thisProfileId) {
      this.props.getUserProfileThunkCreator(profileId);
    }
  }

  render() {
    return <Profile userProfile={this.props.userProfile} />
  }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);
const ProfileContainerWithAuthProtect = withAuthRedirect(ProfileContainerWithRouter);


const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  thisProfileId: state.auth.id,
})


export default connect(mapStateToProps, { getUserProfileThunkCreator })(ProfileContainerWithAuthProtect);

