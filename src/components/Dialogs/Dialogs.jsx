import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/reducers/dialogsReducer';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    const dialogsElemets = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message}/>);
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={ onNewMessageChange } value={newMessageBody} placeholder="enter your message"></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
