import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SearchItem from "./components/SearchItem/SearchItem";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import InformationUserContainer from "./components/InformationUser/InformationUserContainer";
import {initializeAppThunkCreator} from "./Redux/AppReducer.js";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import { withRouter } from "react-router";
import Preloader from "./components/common/Preloader/Preloader.js";
import store from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense.js";

const DialogsContainer = React.lazy( () =>import("./components/Dialogs/DialogsContainer") );
const ProfileContainer = React.lazy( () =>import("./components/Profile/ProfileContainer") );
const ContactsContainer = React.lazy( () =>import("./components/Contacts/ContactsContainer") );
const Login = React.lazy( () =>import("./components/Login/Login.jsx") );

class App extends React.Component {
  // catchAllUnhadledErrors = (reason, promise) => {
  //   alert('some error');

  // };
  componentDidMount() {
    this.props.initializeAppThunkCreator();
    // window.addEventListener("unhandledrejection", this.catchAllUnhadledErrors);
  }
  // componentWillUnmount() {
  //    window.removeEventListener("unhandledrejection", this.catchAllUnhadledErrors);
  // }
  render() {
    // if (!this.props.initialized) {return <Preloader/>}
     return (
            <div className='app-wrapper'>
                <Header/>
                <InformationUserContainer/>
                <SearchItem/>
                <Navbar/>
                <div className='app-wrapper-content'>
                  <Switch>
                  <Route exact path="/"
                           render={ () => <Redirect to={"/profile"}/>}/>
                    <Route path="/dialogs"
                           render={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:contactId?"
                           render={withSuspense(ProfileContainer)}/>
                    <Route path="/contacts"
                           render={withSuspense(ContactsContainer)}/>
                    <Route path="/contacts/favorites"
                           render={withSuspense(ContactsContainer)}/>       
                    <Route path="/login" 
                           render={withSuspense(Login)}/>
                    <Route path="*" 
                           render={() => <div>404 NOT FOUND</div>}/>       
                  </Switch>
                </div>
            </div>
    )     
    }
};
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
};

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeAppThunkCreator}))(App);

const ReactApp = (props) => {
  return( <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
        </BrowserRouter>
    )
};

export default ReactApp;
