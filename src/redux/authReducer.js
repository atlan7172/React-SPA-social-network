import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,       // Приходит с сервера
    email: null,        // Приходит с сервера
    login: null,        // Приходит с сервера
    isAuth: false       // Переменная для отображения либо скрытия
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

//ACTIONS
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

//THUNKS
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()                          // Проверяем, залогинены или нет
    if (response.data.resultCode === 0) {                      // resultCode === 0, означает что данные получены
        let {id, login, email} = response.data.data;           // Деструктуризация
        dispatch(setAuthUserData(id, email, login, true))// Диспатчим ЭКШН
    }
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => { // Делает LogIn пользователя
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: message})) // stopSubmit это Экшн, и так как Форм это редюсер, то мы диспатчим stopSubmit.
    }
}

export const logoutThunk = () => async (dispatch) => {   // Делает LogOut пользователя
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;