import React from "react";
import classes from "./contacts.module.css";
import contactPhoto from "../../assets/images/contact.png";
import {NavLink} from "react-router-dom";
import {follow, unFollow} from "../../Redux/ContactsPageReducer";

let Contact = ({contact, followingInProgress, unFollow, follow, pageSize}) => {
  return (  
            <div className={classes.contact}>
                         <div>
                             <NavLink to={'/profile/' + contact.id}>
                             <img src={contact.photos.small != null ? contact.photos.small : contactPhoto}
                                  className={classes.contactPhoto}/>
                             </NavLink>
                             <span>{contact.name}</span>
                             <span>{contact.status}</span>
                         </div>

                         <div>
                             {contact.followed ? <input disabled={followingInProgress.some(id => id === contact.id)} value='UnFollow' onClick={() => {
                                    unFollow(contact.id);
                                 }}/> :
                                 <input disabled={followingInProgress.some(id => id === contact.id)} value='Follow' onClick={() => {
                                      follow(contact.id);

                                 }}/>
                                 }
                         </div>

              </div>)

};

export default Contact;