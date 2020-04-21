import React from "react";
import contactPhoto from "../../assets/images/contact.png";
import {follow, unFollow} from "../../Redux/ContactsPageReducer";
import Paginator from "./Paginator.jsx";
import Contact from "./Contact.jsx";


let Contacts = ({totalContactsCount, pageSize, currentPage, onPageChanged, contactsData, ...props}) => {
  return (<div>
        <Paginator totalContactsCount={totalContactsCount} pageSize={pageSize} currentPage={currentPage} 
        onPageChanged={onPageChanged}/>
        {contactsData.map(c => 
        	<Contact key={c.id} contact={c} followingInProgress={props.followingInProgress} follow={props.follow}
        unFollow={props.unFollow} />)}
  </div>
  );}

export default Contacts;


// if(document.location.pathname === "/contacts/favorites")