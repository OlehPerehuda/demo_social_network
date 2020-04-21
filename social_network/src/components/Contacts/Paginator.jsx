import React, {useState} from "react";
import classes from "./contacts.module.css";

const Paginator = ({totalContactsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalContactsCount / pageSize);
    let pagesArray = [];
    for(let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;
    return (
        <div className={classes.forSelectedPage}>
        {portionNumber > 1 &&
            <button onClick={ () => {setPortionNumber(portionNumber-1)} }>PREV</button> }
            {pagesArray.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                return <span className={currentPage === p && classes.selectedPage}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
                {portionCount > portionNumber && 
                    <button onClick={ () => { setPortionNumber(portionNumber+1)} }>NEXT</button> }
    </div>)
};
export default Paginator;