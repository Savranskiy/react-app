import { connect } from 'react-redux';
import { sendMessageCreator } from '../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => dispatch(sendMessageCreator(newMessageBody)),
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
