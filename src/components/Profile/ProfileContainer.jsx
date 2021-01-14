import * as React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {  //если userId не передается в УРЛ, то по умолчанию отображаем userId-2
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)//
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}









let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataComponent = withRouter(ProfileContainer)  //Обернули ProfileContainer в контейнер WithUrlDataComponent, нужен для того чтобы в ProfileContainer прокинуть данные из URL

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataComponent)  //Функцией connect прокидывает данные в WithUrlDataComponent


