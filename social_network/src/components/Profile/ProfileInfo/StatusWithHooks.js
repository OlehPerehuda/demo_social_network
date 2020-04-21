import React, {useState, useEffect} from "react";
import classes from './Profile.module.css';

export const StatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect( () => {
		setStatus(props.status);
	}, [props.status]);
	const activateEditMode = () => {
		setEditMode(true);
	};
	const deActivateEditMode = () => { 
		setEditMode(false);
		props.updateStatus(status);
	};
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}
	{
		if(!props.isOwner) {
			return <div className={classes.status}>
				<span>Status:{props.status || "------"}</span>
			</div>
		} else {
	return <div className={classes.status}> 
		{!editMode &&
		<div>
			<span onDoubleClick={activateEditMode} title={"You can double click on me and change status"}><b>Status</b>: {props.status || "------"}</span> 
		</div>
		}
		{editMode && 
			<div>
				<input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deActivateEditMode} className={classes.statusInput}/>
			</div>
	}
		</div>				
		}
	}
}