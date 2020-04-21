import React from "react";
import classes from './SearchItem.module.css';
import {NavLink} from "react-router-dom";

const SearchItem = () => {
  return (
      <div className={classes.searchItem}>
          <div className={classes.iconsForSearch}>
             <ul>
                 <li><NavLink to="/dialogs"><i className="glyphicon glyphicon-envelope
" title="Messages"></i></NavLink></li>
                 <li><NavLink to="/contacts"><i className="glyphicon glyphicon-list-alt
" title="contacts"></i></NavLink></li>
                 <li><NavLink to="/contacts/favorites"><i className="glyphicon glyphicon-star-empty
" title="favorites"></i></NavLink></li>
             </ul>
          </div>
      </div>
  )
};

export default SearchItem;