import React from 'react';
import Dialogs from './Dialogs';
import {
  setNewMessageInStore,
} from '../../redux/reducers/dialogs-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/store-redux';


const mapStateToProps = (state: AppStateType) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
});


export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, { setNewMessageInStore }),
)(Dialogs);