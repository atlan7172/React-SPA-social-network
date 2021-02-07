import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>) //отрисовка массива через мап
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)         //отрисовка массива через мап

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return ( // onSubmit={addNewMessage}, вызываем функцию addNewMessage в которую передаем собранные данные из handleSubmit
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
}

export default Dialogs
