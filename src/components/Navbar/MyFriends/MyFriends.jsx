import React from 'react';
import cn from './MyFriends.module.css';

const Friend = (props) => {
    return (
        <div className={cn.friend}>
            <a href={'/friend/' + props.friend.id}>
                <img src={props.friend.avatar} alt=""/>
                <span>{props.friend.name}</span>
            </a>
        </div>
    );
}

const MyFriends = (props) => {
    const friendsElements = props.friends.map(f => <Friend friend={f} />);

    return (
        <div className={cn.friendsList}>
            {friendsElements}
        </div>
    );
}

export default MyFriends;
