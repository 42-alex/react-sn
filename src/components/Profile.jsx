import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.banner}>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="Nature"
        />
      </div>
      <div>ava + descrption</div>
      <div>
        my posts
        <div>New post</div>
      </div>
      <div>
        <div className={classes.item}>post 1</div>
        <div className={classes.item}>post 2</div>
      </div>
    </div>
  );
}

export default Profile;