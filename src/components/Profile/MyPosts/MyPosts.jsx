import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import * as React from "react";
import {AddPostFormRedux} from "./AddPostForm";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let AddPost = (values) => {
        props.onAddPost(values.newPost);
    }

    return (
        <div>
            Мои Посты
            <AddPostFormRedux onSubmit={AddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts