import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {reguiredField} from "../../utils/validators/validator";
import s from '../common/FormsControls/FormsControl.module.css'

// validate - что то вроде критерия заполнения форм
// Событие onSubmit возникает при отправке формы
const LoginForm = ({error, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
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
            {error && <div className={s.formSummaryError}>
                ERROR
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm); //HoC, который через props прокидывает функцию handleSubmit

