import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';

const maxLength = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                  component={Textarea}
                  name="newMessageBody"
                  placeholder="enter your message"
                  validate={[required, maxLength]}
                />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {
    const state = props.dialogsPage;
    const dialogsElemets = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
    const messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) {
        return <Redirect to="/login" />;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

export default Dialogs;
