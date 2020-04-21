import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helperObjects.js";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CONTACTS = 'SET_CONTACTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CONTACTS_COUNT = 'SET_TOTAL_CONTACTS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
const IS_FOLLOWED = 'IS_FOLLOWED'; 

let initialState = {
    contactsData: [],
    pageSize: 5,
    totalContactsCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    isFollowed: true
};

const contactsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
            ...state,
                contactsData: updateObjectInArray(state.contactsData, action.contactId, "id", true)
        };
        case UNFOLLOW:
            return {
                ...state,
                contactsData: updateObjectInArray(state.contactsData, action.contactId, "id", false)
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_CONTACTS:
            return {
                ...state,
                contactsData: [...action.contactsData]
            };
        case SET_TOTAL_CONTACTS_COUNT: {
            return {
            ...state,
                totalContactsCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id]:
                    state.followingInProgress.filter(id => id !== action.id)
            }
        }
            default: {
            return state;
        }
    }

};

export const acceptFollow = (contactId) => {
    return {
        type: FOLLOW,
        contactId
    }
};

export const acceptUnFollow = (contactId) => {
    return {
        type: UNFOLLOW,
        contactId
    }
};

export const setContacts = (contactsData) => {
    return {
        type: SET_CONTACTS,
        contactsData
    }
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

export const setTotalContactsCount = (totalContactsCount) => {
    return {
        type: SET_TOTAL_CONTACTS_COUNT,
        count: totalContactsCount
    }
};

export const setToggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
};

export const toggleForFollowingProgress = (isFetching, id) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isFetching,
        id
    }
};

export const getUsers = (page, pageSize, totalCount) => async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize, totalCount); 
    dispatch(setToggleIsFetching(false));
    dispatch(setTotalContactsCount(data.totalCount));
    dispatch(setContacts(data.items));
    // this.props.setTotalContactsCount(response.data.totalCount)
};

const folowUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleForFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        }
    dispatch(toggleForFollowingProgress(false, userId));
    
}

export const follow = (userId) => {
    return async (dispatch) => {
        folowUnfollowFlow(dispatch, userId, usersAPI.followPost.bind(usersAPI), acceptFollow);
}
};

export const unFollow = (userId) => {
    return async (dispatch) => {
        folowUnfollowFlow(dispatch, userId, usersAPI.unFollowDelete.bind(usersAPI), acceptUnFollow);        
}
};
export default contactsPageReducer;