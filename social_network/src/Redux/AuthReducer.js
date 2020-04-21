import {usersAPI,
authAPI} from '../api/api.js';
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'authReducer/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
            default: {
            return state;
        }
    }
};

export const setAuthUserDataAC = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth}
    }
};

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMeGet();
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data; //деструктуризация
                dispatch(setAuthUserDataAC(id, email, login, true));
            }
      };

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 
                "Some error";
                dispatch(stopSubmit("login", {_error: message }));
            }       
    };

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut();
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
            }        
};
export default authReducer;