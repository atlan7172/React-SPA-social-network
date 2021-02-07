import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {reguiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControl.module.css'

const LoginForm = (props) => {
    return (
        // validate - что то вроде критерия заполнения форм
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[reguiredField]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       validate={[reguiredField]} component={Input}/>
            </div>
            <div>
                <Field component={'input'} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                ERROR
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm); //HoC, который через props прокидывает функцию handleSubmit

const Login = (props) => {
    const onSubmit = (formData) => { //formData - данные которые нам пришли с Формы которую заполнили, а собирается она благодаря функции handleSubmit, которую мы получили из HoC - reduxForm
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) { // Если зарегестрированный пользователь, то переносит  на страницу профайл
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