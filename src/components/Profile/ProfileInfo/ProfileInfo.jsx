import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileAvatar from './ProfileAvatar';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileData/ProfileDataForm';

const ProfileInfo = (props) => {

  const handleFormDataSubmit = (formData) => {
    props.setProfileData(formData);
  }

  if (!props.userProfile) {
    return <Preloader />;
  }

  return (
    <div>
      <ProfileStatus status={ props.userProfile.status } setUserStatus={ props.setUserStatus } />
      <ProfileAvatar avatarUrl={props.userProfile.photos.large} updateAvatar={props.updateAvatar} />
      { !props.profileEditMode
      ? <ProfileData userProfile={props.userProfile} toggleEditMode={props.toggleProfileEditMode} />
      : <ProfileDataForm initialValues={props.userProfile} toggleEditMode={props.toggleProfileEditMode}
                         onSubmit={handleFormDataSubmit} userProfile={props.userProfile} /> }
    </div>
  )
};

export default ProfileInfo;
