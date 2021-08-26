import classes from './ProfileAvatar.module.css';
import defaultAvatar from './../../../assets/images/avatar.jpg';

const ProfileAvatar = (props) => {
  const handleAvatarChange = (e) => {
    if (e.target.files.length) {
      props.updateAvatar(e.target.files[0]);
    }
  }

  return (
    <div className={classes.mainPhotoWrapper}>
      <img src={props.avatarUrl || defaultAvatar} alt="Profile avatar" className={classes.mainPhoto} />
      <input type="file" onChange={handleAvatarChange} className={classes.avatarChoosing} />
    </div>
  )
};

export default ProfileAvatar;
