import {maxLengthCreator, reguiredField} from "../../../utils/validators/validator";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import * as React from "react";

const maxLength = maxLengthCreator(100) // Максимальная длина сообщения, вынесли отдельно так как в компоненте замыкание

const AddMessageForm = (props) => {
    return ( // onSubmit={props.handleSubmit} собирает все заполненные данные из Форм
             // validate - что то вроде критерия заполнения форм
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} // name={'newMessageBody'} имя, через которое мы обращаемся к содержимому формы
                       placeholder='Enter your message'
                       validate={[reguiredField, maxLength]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm) //HoC, который через props прокидывает функцию handleSubmit
