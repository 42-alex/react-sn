import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <div className={classes.banner}>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="Nature"
        />
      </div>
      <div>ava + description</div>
    </>
  )
}

export default ProfileInfo;
