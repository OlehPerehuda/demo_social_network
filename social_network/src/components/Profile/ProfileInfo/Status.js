	import React from "react";
	import classes from './Profile.module.css';

	class Status extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deActivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	}
	onStatusChange = (e) => {
		this.setState(  
		{
			status: e.currentTarget.value
		});
	};
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});				
		}
	}
	render() {
		return <div className={classes.status}> 
		{!this.state.editMode &&
			<div>
				<span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span> 
			</div>
		}
		{this.state.editMode && 
			<div>
				<input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.deActivateEditMode}/>
			</div>
		}
		</div>		
	}
	}

	export default Status;