const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'Alfred' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Clayd' }
    ],
    messages: [
        { id: 1, message: 'msg 1' },
        { id: 2, message: 'msg 2' },
        { id: 3, message: 'msg 3' }
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 1, message: body });
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: text };
};

export default dialogsReducer;
