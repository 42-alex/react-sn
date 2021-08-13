import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.profileWrapper}>
      <ProfileInfo userProfile={ props.userProfile } setUserStatus={props.setUserStatus} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;