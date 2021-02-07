import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,       // Приходит с сервера
    email: null,        // Приходит с сервера
    login: null,        // Приходит с сервера
    isAuth: false       // Булево значение для определения, отображать данные или нет
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data                                  // Заносим данные полученные с сервера
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

//THUNK'S
export const getAuthUserData = () => (dispatch) => {
   return authAPI.me()                                             // Обращаемся к серверному API
        .then(response => {                                  // then это промис, типа когда данные получим, только потом программа идет дальше
            if (response.data.resultCode === 0) {            // resultCode === 0 , озночает типа всё прошло без ошибок
                let {id, login, email} = response.data.data; // деструктурезируем объект data.data
                dispatch(setAuthUserData(id, email, login, true))  // переменные передаем в ActionCreator, isAuth принимает значение true
            }
        })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                 dispatch(stopSubmit('login', {_error: message})) // stopSubmit это Экшн, и так как Форм это редюсер, то мы диспатчим stopSubmit.
            }
        })
}

export const logoutThunk = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer;