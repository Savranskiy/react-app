import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    const dialogsElemets = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
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
