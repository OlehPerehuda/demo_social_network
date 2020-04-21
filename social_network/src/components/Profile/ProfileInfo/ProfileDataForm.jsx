import React from "react";
import {createField, Element} from "../../common/FormsControls/FormsControls.js";
import {reduxForm} from "redux-form";
import classes from "./Profile.module.css";
import {maxLengthCreator} from "../../../utils/validators/validators.js";

const maxLength30 = maxLengthCreator(30);
const Input = Element("input");
const Textarea = Element("textarea");
export const ProfileData = ({profile, isOwner, gotEditMode}) => {
    return (
    			<div className={classes.profileData}>
                { isOwner && <div><button onClick={gotEditMode}>Edit</button></div>}
            <div><b>Full Name:</b>{profile.fullName}</div>
                <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
                {profile.lookingForAJob &&
                <div><b>My professional skills:</b>{profile.lookingForAJobDescription}</div>
                }
                <div><b>About Me:</b>
                   {profile.aboutMe}
                </div>
                                <div><b>Contacts:</b>
                   {profile.contacts.github}
                </div>
                </div>
)
};
const ProfileDataForm = ({profile, handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
                <div className={classes.profileData}>
                <div><button>Save</button></div>
            <div><b>Full Name:</b>{createField("FullName", "fullName", Input,
            [])}</div>
                <div><b>Looking for a job:</b>{createField("", "lookingForAJob", "input", [], {type: "checkbox"})}</div>
                <div><b>My professional skills:</b>{createField("skills", "lookingForAJobDescription", Textarea)}</div>
                 <div><b>About Me:</b>
                   {createField("AboutMe", "AboutMe", Textarea, [])}
                </div>
                <div><b>Contacts:</b>
                   {createField("Contacts", "Contacts", Input, [])}
                </div>

                </div>
		</form>
		)
}
export const ProfileDataFormRedux = reduxForm({
    form: "edit-form",
})(ProfileDataForm);