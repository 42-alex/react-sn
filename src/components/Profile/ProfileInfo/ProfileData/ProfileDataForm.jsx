import c from './ProfileData.module.css';
import { Field, reduxForm } from 'redux-form';
import ValidatedInput from '../../../common/ValidatedInput/ValidatedInput';
import { maxLength25, required } from '../../../../utils/validators';

const ProfileDataForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <span className={c.fieldDescription}>Full name: </span>
          <Field
            element="input"
            name="fullName"
            component={ ValidatedInput }
            validate={[ required, maxLength25 ]}
          />
        </div>
        <div>
          <span className={c.fieldDescription}>About me: </span>
          <Field
            element="input"
            name="aboutMe"
            component={ ValidatedInput }
            validate={[ required, maxLength25 ]}
          />
        </div>
        <div>
          <span className={c.fieldDescription}>Looking for a job: </span>
          <Field
            element="input"
            type="checkbox"
            name="lookingForAJob"
            component={ ValidatedInput }
            validate={[ ]}
          />
        </div>
        <div>
          <span className={c.fieldDescription}>Skills: </span>
          <Field
            element="input"
            name="lookingForAJobDescription"
            component={ ValidatedInput }
            validate={[ required, maxLength25 ]}
          />
        </div>
        <div>
          <span className={c.fieldDescription}>Contacts: </span>
          { Object.keys(props.userProfile.contacts).map((key, index) => (
            <div key={index}>
              <span><b>{ key }</b>: </span>
              <Field
                element="input"
                name={`contacts.${key}`}
                component={ ValidatedInput }
                validate={[ maxLength25 ]}
              />
            </div>
          ))
          }
        </div>
        <div>
          <button>Ok</button>
          <button onClick={props.toggleEditMode} type="button">Cancel</button>
        </div>
      </form>
    </div>
  )
};


const ProfileDataFormRedux = reduxForm({ form: 'profileForm' })(ProfileDataForm);

export default ProfileDataFormRedux;
