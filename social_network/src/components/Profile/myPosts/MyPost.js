import React from "react";
import classes from './MyPost.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators.js";
import {Element} from "../../../components/common/FormsControls/FormsControls.js";
 
const maxLength100 = maxLengthCreator(100);
const TextArea = Element("textarea");
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeHolder={"Write text for your post"} name={"newPostText"}
            component={TextArea} validate={[required, maxLength100]}/>
            <div><button>addPost</button></div>
        </form>
        )
};

let AddPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddPostForm);

class MyPosts extends React.PureComponent {
    render() {
    let postsElements = this.props.postsData
        .map( post => <Post message={post.message}/>
    );
    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        this.props.addPost(values.newPostText);
    };  
    return ( 
        <div className={classes.posts}>
        <AddPostFormRedux onSubmit={onAddPost}/>
        <div>{postsElements}</div>
    </div> )       
    }

};

export default MyPosts;