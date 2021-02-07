import * as React from "react";
import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HoC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(                               // Упрощенный синтаксис оборачивания Компонент
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)                                 // Функция, которая отвечает за Логинизацию, если незалогинены, то скрывает Компонент
    (Dialogs);



