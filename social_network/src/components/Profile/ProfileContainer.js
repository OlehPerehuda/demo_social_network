  import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getContactProfile, 
getUserStatus, updateStatus, savePhoto, saveProfile} from "../../Redux/ProfilePageReducer";
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {usersAPI} from "../../api/api.js";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
       let contactId = this.props.match.params.contactId;
   if(!contactId) {
     contactId = this.props.autorizedUserId;
   }
   this.props.getContactProfile(contactId);
   this.props.getUserStatus(contactId);
  }
  componentDidMount() {
   this.refreshProfile();
 }
 componentDidUpdate(prevProps, prevState, snapshot) {
  if (this.props.match.params.contactId != prevProps.match.params.contactId) {
    this.refreshProfile();  
  }
 }
 render() {
  return (<Profile {...this.props} profile={this.props.profile} status={this.props.status}
    updateStatus={this.props.updateStatus}
    isOwner={!this.props.match.params.contactId}
    savePhoto={this.props.savePhoto}
    saveProfile={this.props.saveProfile}/>)
    
}
};
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  }};

export default compose(connect(mapStateToProps, {getContactProfile, getUserStatus, updateStatus, savePhoto, saveProfile}),
  withRouter, withAuthRedirect)(ProfileContainer);