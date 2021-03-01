import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId    // match.params позволяет нам считать URL
        if (!userId) {                                 // Если userId не передается в УРЛ, то по умолчанию отображаем наш аккаунт
            userId = this.props.myID                   // Наш id, получили в App - initializeApp()
        }
        this.props.getUserProfile(userId)              //thunk, получаем данные о профиле пользователя
        this.props.getStatus(userId)                   //thunk, получаем статус пользователя
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myID: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter, // HoC который нужен для считывания URL
)(ProfileContainer)



