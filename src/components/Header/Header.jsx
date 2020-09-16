import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Interior-Design-Logo-1.png" alt="logo" />

            <div className={styles.loginBlock}>
                {props.isAuth ? <button onClick={props.logout}>{props.login}</button> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
