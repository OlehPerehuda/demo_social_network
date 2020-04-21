import React from 'react';
import InformationUser from "./InformationUser";
import {connect} from "react-redux";
import {logOut} from "../../Redux/AuthReducer";
import {usersAPI} from "../../api/api";


class InformationUserContainer extends React.Component {

    render() {
        return (<InformationUser {...this.props}/>)
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {logOut}) (InformationUserContainer);