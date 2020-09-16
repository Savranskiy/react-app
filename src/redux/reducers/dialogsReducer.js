const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'Alfred' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Clayd' },
    ],
    messages: [
        { id: 1, message: 'msg 1' },
        { id: 2, message: 'msg 2' },
        { id: 3, message: 'msg 3' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.newMessageBody }],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
