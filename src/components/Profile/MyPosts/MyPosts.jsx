import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import * as React from "react";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = () => {
        props.addPost(); // вызывает ЭКШН addPostActionCreator
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value; // В переменной text хранится значение newPostElement
        props.updateNewPostText(text); // в updateNewPostText мы передаем text в параметры
    }


            // value={props.newPostText} - хранит значение из state, которое по умолчанию 'it-hub'
            // onChange={onPostChange} - меняет значение
            // onClick={onAddPost} - вызывает метод onAddPost
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts