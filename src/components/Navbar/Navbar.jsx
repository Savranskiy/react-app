import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import MyFriends from './MyFriends/MyFriends';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            {/* <MyFriends friends={props.state.friends} /> */}
        </nav>
    );
};

export default Navbar;
