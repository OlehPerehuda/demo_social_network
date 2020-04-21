import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostContainer";

const Profile = (props) => {
		if(props.isOwner) {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}/>
        <MyPostsContainer/>
    </div>			
  } else {
  	return <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}
  	saveProfile={props.saveProfile}/>
  }
};

export default Profile;