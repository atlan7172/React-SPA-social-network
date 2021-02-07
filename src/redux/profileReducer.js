import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 10},
        {id: 2, message: 'How are you', likesCount: 12}
    ],             // Посты которые мы отображаем
    newPostText: 'it-hub',    // Текст по умолчанию в поле ввода
    profile: null,            // Отображаемый профиль
    status: ""                // Статус который мы отображаем
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {                     // Создаем новый элемент массива posts
            let newPost = {
                id: 5,
                message: action.newPost,
                likesCount: 17
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

// Action-ы которые передаются в метод dispatch
export const addPost = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})

// THUNK'S
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data)) // Полученные с сервера данные мы вносим в state.profile
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))    //
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer