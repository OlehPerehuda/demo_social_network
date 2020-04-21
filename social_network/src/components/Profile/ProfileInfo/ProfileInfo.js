import React, {useState} from "react";
import classes from './Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {StatusWithHooks} from "./StatusWithHooks.js";
import contactPhoto from "../../../assets/images/contact.png";
import {ProfileData, ProfileDataFormRedux} from "../ProfileInfo/ProfileDataForm.jsx";
const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    };    
    if(!profile) {
        return <Preloader/>
    } else {
        const onMainPhotoSelected = (e) => {
            if (e.target.files.length) {
                savePhoto(e.target.files[0]);
            }
        };
        return <div className={classes.general}>

                <div className={classes.statusAndProfileData}>
                <StatusWithHooks status={status} updateStatus={updateStatus}
                isOwner={isOwner}/>
                 {editMode? <ProfileDataFormRedux onSubmit={onSubmit} profile={profile}/> : <ProfileData profile={profile} isOwner={isOwner} gotEditMode={()=>{setEditMode(true)}}/>}
                 </div>
                             <div className={classes.mainAction}>
                <img src={profile.photos.large || contactPhoto}/>
                {isOwner && (<><input type={"file"} className={classes.inputFile} onChange={onMainPhotoSelected}/></>)}
                </div>
            </div>

    }
};


export default ProfileInfo;