import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.profileWrapper}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;