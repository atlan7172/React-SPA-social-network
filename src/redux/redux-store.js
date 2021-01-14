import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({ //здесь мы объединяем все редюсеры
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers); // создание объекта store со всеми его методами (getState, dispatch, subscribe и т.д)

export default store;