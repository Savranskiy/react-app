import React from 'react';
import cn from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import MyFriends from './MyFriends/MyFriends';

const Navbar = (props) => {
    return (
        <nav className={cn.nav}>
            <div className={cn.item}>
                <NavLink to="/profile" activeClassName={cn.active}>Profile</NavLink>
            </div>
            <div className={cn.item}>
                <NavLink to="/dialogs" activeClassName={cn.active}>Messages</NavLink>
            </div>
            <div className={cn.item}>
                <NavLink to="/news" activeClassName={cn.active}>News</NavLink>
            </div>
            <div className={cn.item}>
                <NavLink to="/music" activeClassName={cn.active}>Music</NavLink>
            </div>
            <div className={cn.item}>
                <NavLink to="/settings" activeClassName={cn.active}>Settings</NavLink>
            </div>
            <MyFriends friends={props.state.friends} />
        </nav>
    );
};

export default Navbar;
