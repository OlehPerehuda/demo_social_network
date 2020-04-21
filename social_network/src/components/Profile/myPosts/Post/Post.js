import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
            <div className={classes.posts}>
                {props.message}
                <div>
                    <span><i className="glyphicon glyphicon-heart
"></i></span>
                </div>
            </div>
    )

};


export default Post;