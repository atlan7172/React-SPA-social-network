import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer";

let reducers = combineReducers({       //здесь мы объединяем все редюсеры
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

// applyMiddleware - промежуточная херня, чтобы Редюсер мог считывать санку, так как он сам принимает только объект action
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // Создание объекта store со всеми его методами (getState, dispatch, subscribe и т.д)

export default store;