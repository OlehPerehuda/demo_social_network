import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./ProfilePageReducer";
import dialogPageReducer from "./DialogPageReducer";
import appReducer from "./AppReducer";
import contactsPageReducer from "./ContactsPageReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogPageReducer,
        contactsPage: contactsPageReducer,
        auth: authReducer,
      	form: formReducer,
      	app: appReducer
      }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;