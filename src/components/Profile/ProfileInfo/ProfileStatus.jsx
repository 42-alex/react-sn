import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      statusText: this.props.status,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({ statusText: this.props.status })
    }
  }

  enableStatusEditMode = () => {
    this.setState({ editMode: true })
  }

  saveStatus = () => {
    if (this.state.statusText !== this.props.status) {
      this.props.setUserStatus(this.state.statusText);
    }
    this.setState({editMode: false});
  }

  onStatusChange = (e) => {
    this.setState({ statusText: e.target.value })
  }

  render() {
    return (
      <div>
        Status:
        { this.state.editMode
          ? <div>
              <input value={ this.state.statusText } onBlur={ this.saveStatus } onChange={ this.onStatusChange } autoFocus />
            </div>
          : <div>
              <span onDoubleClick={ this.enableStatusEditMode }>{ this.props.status || '(-- empty --)' }</span>
            </div>
        }
        <hr />
      </div>
    );
  }
}

export default ProfileStatus;
