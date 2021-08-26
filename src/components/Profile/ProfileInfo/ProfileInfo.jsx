import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileAvatar from './ProfileAvatar';

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }

  return (
    <>
      <div>
        <div>Full name: {props.userProfile.fullName}</div>
        <div>About me: {props.userProfile.aboutMe}</div>
        <ProfileAvatar avatarUrl={props.userProfile.photos.large} />
        <ProfileStatus status={ props.userProfile.status } setUserStatus={ props.setUserStatus } />
      </div>
    </>
  )
};

export default ProfileInfo;
