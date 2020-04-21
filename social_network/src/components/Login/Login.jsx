import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls.js";
import {required, maxLengthCreator} from "../../utils/validators/validators.js";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/AuthReducer.js"; 
import {Redirect} from "react-router-dom";

import classes from "./login.module.css";
import {createField} from "../common/FormsControls/FormsControls.js";

const maxLength25 = maxLengthCreator(25);
const Input = Element("input");
const LoginForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit}>
				{createField('Login', "email", Input, [required, maxLength25])}
				{createField('Password', "password", Input, [required, maxLength25], {type: "password"})}
				{createField(null, "rememberMe", "input", [], {type: "checkbox"}, "remember Me")}
			{error && <div className={classes.summaryError}>
				{error}
			</div>
			}
			<div>
				<button>Login</button>
			</div>
		</form>)
};
const LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
	};
	if(props.isAuth) {
		return <Redirect to={"/profile"} />
	}
	return <div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
};

const mapStatetoProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStatetoProps, {loginThunkCreator})(Login);