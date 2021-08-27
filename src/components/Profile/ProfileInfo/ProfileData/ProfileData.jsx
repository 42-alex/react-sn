import c from './ProfileData.module.css';

const ProfileData = (props) => {
  const isLookingForAJob = !!props.userProfile.lookingForAJob;
  const userContacts = props.userProfile.contacts;

  return (
    <div>
      <button onClick={props.toggleEditMode}>Edit</button>
      <div>
        <span className={c.fieldDescription}>Full name: </span>
        <span className={c.fieldData}>{props.userProfile.fullName}</span>
      </div>
      <div>
        <span className={c.fieldDescription}>About me: </span>
        <span className={c.fieldData}>{props.userProfile.aboutMe}</span>
      </div>
      <div>
        <span className={c.fieldDescription}>Looking for a job: </span>
        <span className={c.fieldData}>{isLookingForAJob ? 'Yes' : 'No'}</span>
      </div>
      { isLookingForAJob &&
        <div>
          <span className={c.fieldDescription}>Skills: </span>
          <span className={c.fieldData}>{props.userProfile.lookingForAJobDescription}</span>
        </div>
      }
      <div>
        <span className={c.fieldDescription}>Contacts: </span>
        { Object.keys(userContacts).map((key, index) => (
            <div className={c.contact} key={index}>
              <span className={c.fieldDescription}>{ key }: </span>
              <span className={c.fieldData}>{ userContacts[key] }</span>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default ProfileData;
