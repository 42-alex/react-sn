import classes from './ProfileAvatar.module.css';
import defaultAvatar from './../../../assets/images/avatar.jpg';

const ProfileAvatar = (props) => {
  return (
    <div>
      <img src={props.avatarUrl || defaultAvatar} alt="Profile avatar" className={classes.mainPhoto} />
    </div>
  )
};

export default ProfileAvatar;
