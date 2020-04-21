import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls.js";
import {required, maxLengthCreator} from "../../utils/validators/validators.js";

const maxLength100 = maxLengthCreator(100);
const TextArea = Element("textarea");
const DialogItem = (props) => {
    return  <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
};
const Message = (props) => {
    return <div className={classes.dialog}>{props.textMessage}</div>
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeHolder='enter your message'
                component={TextArea}
                name={"newMessageBody"} validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form> 
)};

const AddMessageFormRedux = reduxForm({
    form: "DialogAddMessageForm",
})(AddMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
        );
    let messagesElements = state.messagesData
        .map( message => <Message textMessage = {message.textMessage} key={message.id}/>
        );
    let newMessageElement = React.createRef();
    let newMessageBody = state.newMessageBody;
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };
    if (!props.isAuth)  {
        return <Redirect to={"/login"}/>
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
             <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};



export default Dialogs;