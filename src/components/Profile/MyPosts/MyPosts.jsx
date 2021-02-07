import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, reguiredField} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>) // Отрисовываем массив posts

    let AddPost = (values) => {
        props.onAddPost(values.newPost);
    }

    return (
        // onSubmit={AddPost}, вызываем функцию AddPost в которую передаем собранные данные из handleSubmit
        <div>
            My posts
            <AddPostFormRedux onSubmit={AddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const maxLength = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (// onSubmit={props.handleSubmit} собирает все заполненные данные из Форм
            // validate - что то вроде критерия заполнения форм
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPost'}
                       placeholder='Enter your post'
                       validate={[reguiredField, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

export default MyPosts