import React from "react";
import classes from './Header.module.css';
import headerPhoto from "../../assets/images/O.png";

const Header = () => {
    return <header className={classes.myHeader}>
        <img src={headerPhoto}/>
    </header>
};
export default Header;