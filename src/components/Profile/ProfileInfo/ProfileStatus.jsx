import React, { useEffect, useState } from 'react';


const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [statusText, setStatusText] = useState(props.status);

  useEffect(() => {
    setStatusText(props.status);
  }, [props.status])


  const enableStatusEditMode = () => {
    setEditMode(true);
  }

  const saveStatus = () => {
    if (statusText !== props.status) {
      props.setUserStatus(statusText);
    }
    setEditMode(false);
  }

  const onStatusChange = (e) => {
    setStatusText(e.target.value);
  }

  return (
    <div>
      Status:
      {editMode
        ? <input value={statusText} onBlur={saveStatus} onChange={onStatusChange} autoFocus />
        : <span onDoubleClick={enableStatusEditMode}> {props.status || '(-- empty --)'}</span>
      }
    </div>
  );
}

export default ProfileStatus;
