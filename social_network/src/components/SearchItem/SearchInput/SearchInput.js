import React from "react";
import classes from './SearchInput.module.css';

const SearchInput = () => {
  return (
      <form className='myForm'>
          <input value='' className={classes.searchInput}/>
      </form>
  )
};

export default SearchInput;