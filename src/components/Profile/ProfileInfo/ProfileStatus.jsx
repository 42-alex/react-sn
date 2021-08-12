import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    }
  }

  enableEditMode = () => {
    this.setState({ editMode: true })
  }

  disableEditMode = () => {
    this.setState({ editMode: false })
  }

  render() {
    return (
      <div>
        { this.state.editMode
          ? <div>
              <input value={ this.props.status } onBlur={ this.disableEditMode } autoFocus />
            </div>
          : <div>
              <span onDoubleClick={ this.enableEditMode }>{ this.props.status }</span>
            </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;
