import React from 'react';
import classes from './InformationUser.module.css';
import {NavLink} from "react-router-dom";

const InformationUser = (props) => {
	
  return (
      <div className={classes.informationUser}>
        <div className={classes.loginBlock}>
          { props.isAuth ? <div>{props.login} <button 
          onClick={props.logOut}>Log Out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>
  )
};

export default InformationUser;