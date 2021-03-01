import React from 'react';
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {ReduxLoginForm} from "./LoginForm";

const Login = ({isAuth, loginThunk}) => {

    const onSubmit = (formData) => { //formData - данные которые нам пришли с Формы которую заполнили, а собирается она благодаря функции handleSubmit
        loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {                    // Если зарегестрированный пользователь, то переносит  на страницу профайл
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunk, logoutThunk})(Login);