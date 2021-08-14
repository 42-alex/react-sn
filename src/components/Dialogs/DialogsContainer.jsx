import Dialogs from './Dialogs';
import {
  setNewMessageInStore,
} from '../../redux/reducers/dialogs-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
});


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { setNewMessageInStore }),
)(Dialogs);