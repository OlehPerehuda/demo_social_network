import {usersAPI, 
profileAPI} from '../api/api.js';

const ADD_POST = 'ADD_POST';
const SET_CONTACT_PROFILE = 'SET_CONTACT_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';
let initialState = {

    postsData: [
        {id: 1, message: "hello, i am new in this messenger"},
        {id: 2, message: "I am glad"}
    ],
    profile: null,
    status: ''
};

const profilePageReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, message: action.newPostText}]
            }
        }
        case SET_CONTACT_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: {
            return state;
        }
    }

};
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};
export const setContactProfile = (profile) => {
    return {
        type: SET_CONTACT_PROFILE,
        profile
    }
};
export const setUserStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};
export const savePhotoSuccess = (photos) => {
    return {
        type: SET_PHOTO,
        photos
    }
};
export const getContactProfile = (contactId) => async (dispatch) => {
    let response = await profileAPI.getProfile(contactId);
    dispatch(setContactProfile(response.data));
};
export const getUserStatus = (contactId) => async (dispatch) => {
    let response = await profileAPI.getStatus(contactId);     
    dispatch(setUserStatus(response.data))       
};
export const updateStatus = (status) => async (dispatch) => {
    try {
    let response = await profileAPI.updateStatus(status);    
            if (response.data.resultCode === 0) {
               dispatch(setUserStatus(status));   
            }
        } catch (error) {
            
        } 
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
                if (response.data.resultCode === 0) {
               dispatch(savePhotoSuccess(response.data.data.photos));   
            }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
    debugger;
                if (response.data.resultCode === 0) {
                    dispatch(getContactProfile(userId));
            }
};


export default profilePageReducer;