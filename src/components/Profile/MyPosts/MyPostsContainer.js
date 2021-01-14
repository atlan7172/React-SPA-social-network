import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => { //в параметре text содержится text из MyPosts
            let action = updateNewPostTextActionCreator(text) //в параметре text содержится text из MyPosts
            dispatch(action) // в метод dispatch мы передаем ЭКШН updateNewPostTextActionCreator
        },
        addPost: () => {
            dispatch(addPostActionCreator()) // вызываем метод dispatch, и передаем в него ЭКШН addPostActionCreator
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer