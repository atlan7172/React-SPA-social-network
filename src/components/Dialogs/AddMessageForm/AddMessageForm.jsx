import {maxLengthCreator, reguiredField} from "../../../utils/validators/validator";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import * as React from "react";

const maxLength = maxLengthCreator(100)         // Максимальная длина сообщения, вынесли отдельно так как в компоненте замыкание

const AddMessageForm = (props) => {
    return (                                             // onSubmit - возникает при отправке формы, handleSubmit собирает все данные с форм
                                                         // validate - что то вроде критерия заполнения форм
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}             // Textarea компонента, используем вместо обычного тега textarea, так как накидываем стили
                       name={'newMessageBody'}          // Имя, через которое мы обращаемся к содержимому формы
                       placeholder='Enter your message' // Просто надпись по дефолту
                       validate={[reguiredField, maxLength]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm) //HoC, который через props прокидывает функцию handleSubmit