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
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            const body = state.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
                newMessageBody: ''
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: text };
};

export default dialogsReducer;
