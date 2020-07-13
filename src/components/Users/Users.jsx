import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, fullName: 'Alex', photoUrl: 'https://jewishvirtuallibrary.org/jsource/images/People/Adolf_Hitler1.jpg', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }, followed: false },
            { id: 2, fullName: 'Sasha', photoUrl: 'https://jewishvirtuallibrary.org/jsource/images/People/Adolf_Hitler1.jpg', status: 'I am a boss', location: { city: 'Moscow', country: 'Russia' }, followed: true },
            { id: 3, fullName: 'Andrew', photoUrl: 'https://jewishvirtuallibrary.org/jsource/images/People/Adolf_Hitler1.jpg', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' }, followed: false }
        ]);
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;
