import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator, setUserStatusThunkCreator } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
    return <Profile userProfile={this.props.userProfile} setUserStatus={this.props.setUserStatusThunkCreator} />
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  thisProfileId: state.auth.id,
})


export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfileThunkCreator, setUserStatusThunkCreator }),
)(ProfileContainer);

