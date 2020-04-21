import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    toggleForFollowingProgress, follow, unFollow
} from "../../Redux/ContactsPageReducer";
import {getContactsPage, getPageSize, getTotalContactsCount,
getCurrentPage, getIsFetching, getFollowingInProgress} from "../../Redux/usersSelectors.js";
import Contacts from "./Contacts";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";
import {compose} from "redux";

class ContactsContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
        }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Contacts totalContactsCount={this.props.totalContactsCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         contactsData={this.props.contactsData}
                         isFollowed={this.props.isFollowed}
                         followingInProgress={this.props.followingInProgress}
                         follow={this.props.follow}
                         unFollow={this.props.unFollow}
                         toggleForFollowingProgress={this.props.toggleForFollowingProgress}/>
                         </>
                     }};

// let mapStateToProps = (state) => {
//     return {
//         contactsPage: state.contactsPage,
//         pageSize: state.contactsPage.pageSize,
//         totalContactsCount: state.contactsPage.totalContactsCount,
//         currentPage: state.contactsPage.currentPage,
//         isFetching: state.contactsPage.isFetching,
//         followingInProgress: state.contactsPage.followingInProgress
//     }
// };
let mapStateToProps = (state) => {
    return {
        contactsData: getContactsPage(state),
        pageSize: getPageSize(state),
        totalContactsCount: getTotalContactsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(connect(mapStateToProps, 
    {setCurrentPage,
    getUsers, follow, unFollow}), withAuthRedirect)(ContactsContainer)