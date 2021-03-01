import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messages.map(message => <Message message={message.message}/>)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
        values.newMessageBody = ''
    }
// onSubmit={addNewMessage}, вызываем функцию addNewMessage в которую передаем собранные данные из AddMessageForm-handleSubmit
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
}

export default Dialogs
