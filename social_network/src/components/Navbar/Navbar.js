import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.myNav}>
            <ul>
                <li className={classes.item}><NavLink to="/profile" className={classes.NavLink}>profile</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" className={classes.NavLink}>messages</NavLink></li>
                <li className={classes.item}>news</li>
                <li className={classes.item}>music</li>
                <li className={classes.item}>settings</li>
            </ul>
        </nav>
    )
};

export default Navbar;