import React from 'react';
import cn from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    
    return (
        <div className={cn.dialog + ' ' + cn.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={cn.dialog}>{props.message}</div>
};

const Dialogs = (props) => {
    const dialogsElemets = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={cn.dialogs}>
            <div className={cn.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={cn.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
