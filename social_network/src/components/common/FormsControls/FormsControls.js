import React from "react";
import classes from "./FormsControls.module.css";
import {Field} from "redux-form";
export const Element = (Element) => (props) => {
	const hasError = props.meta.touched && props.meta.error;

	return (
		<div className={classes.formControl}>
			<div>
				<Element {...props.input} className={hasError? classes.errorTextarea : ""}/>
			</div>
			<div>
				{ hasError && <span>{props.meta.error}</span>}
			</div>
		</div>
		)
};

export const createField = (placeHolder, name, component, validators, props = {}, text = "") => {
	return (
		<div>
			<Field placeHolder={placeHolder} name={name} component={component}
			validate={validators} props={props}/>{text}
		</div>
	)
};