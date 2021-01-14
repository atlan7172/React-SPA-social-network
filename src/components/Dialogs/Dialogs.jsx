import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let newMessageElement = React.createRef();

    let onNewMessageChange = () => {
        let body = newMessageElement.current.value //body содержит актуальные данные из textarea, которые передает в метод updateNewMessageBody
        props.updateNewMessageBody(body) // данный метод перекидывает наши атрибуты в ЭКШН, и там уже заносится в новый стэйт, в свойство newMessageBody
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='Enter message'
                                   value={newMessageBody} // value это значение которое содержится в строке по умолчанию
                                   ref={newMessageElement} //ref содержит вводимые данные. onChange запускает момент, когда изменяется значение элемента
                                   onChange={onNewMessageChange}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs
