import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, reguiredField} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPost'}
                       placeholder='Enter your post'
                       validate={[reguiredField, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm)
