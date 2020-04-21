import {usersAPI,
authAPI} from '../api/api.js';
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./AuthReducer.js";

const SET_INITIALIZED = 'SET_INITIALIZED';
let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
            default: {
            return state;
        }
    }
};

export const initializedSuccessAC = () => {
    return {
        type: SET_INITIALIZED
    }
};

export const initializeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then( () => {
        dispatch(initializedSuccessAC());
    });
};

export default appReducer;