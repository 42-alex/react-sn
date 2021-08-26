import Preloader from '../../common/Preloader';
import defaultAvatar from '../../../assets/images/avatar.jpg';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }

  return (
    <>
      <div className={classes.profileDescription}>
        <div>Full name: {props.userProfile.fullName}</div>
        <div>About me: {props.userProfile.aboutMe}</div>
        <div>
          <img src={props.userProfile.photos.small || defaultAvatar} alt="Profile" className={classes.mainPhoto} />
        </div>
        <ProfileStatus status={ props.userProfile.status } setUserStatus={ props.setUserStatus } />
      </div>
    </>
  )
};

export default ProfileInfo;
