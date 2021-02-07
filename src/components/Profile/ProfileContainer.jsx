import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../HoC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {                              // Life cycle, который запускается только при отрисовке компонента
        let userId = this.props.match.params.userId    // Берем данные из URL-а
        if (!userId) {                                 // Если userId не передается в УРЛ, то по умолчанию отображаем наш аккаунт
            userId = this.props.myID
        }
        this.props.getUserProfile(userId) //thunk, получаем зарегестрированного пользователя, данные с сервера вносим в profileReducer.state.profile
        this.props.getStatus(userId)      //thunk, в profileReducer.state.status вносим данные с сервера
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myID: state.auth.userId
})

export default compose(                                                                   // Упрощенный синтаксис прокидывания данных в Компоненту
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),  // Прокидываем свойства из profileReducer
    withRouter,                                                                           // HoC который нужен для считывания УРЛа
    withAuthRedirect                                                                      // Функция, которая отвечает за Логинизацию, если незалогинены, то скрывает Компонент
)(ProfileContainer)



