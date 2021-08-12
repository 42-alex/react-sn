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
      <div className={classes.banner}>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="Nature"
        />
      </div>
      <div className={classes.profileDescription}>
        <div>Full name: {props.userProfile.fullName}</div>
        <div>About me: {props.userProfile.aboutMe}</div>
        <div>
          <img src={props.userProfile.photos.small || defaultAvatar} alt="Profile" />
        </div>
      </div>
    </>
  )
};

export default ProfileInfo;
