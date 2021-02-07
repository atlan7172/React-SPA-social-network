import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({              //withAuthRedirect должен знать isAuth, иначе не будет знать когда отрисовыввать
    isAuth: state.auth.isAuth
})


export const withAuthRedirect = (Component) => {    //HOC

    class RedirectComponent extends React.Component {
        render() {  // Если пользователь не зарегестрирован скидывает нас на login, в ином случаи отрисовываем нужный компонент
            if (this.props.isAuth === false) return <Redirect to='/login'/>
            else return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)  // Оборачиваем компонент RedirectComponent, чтобы передать в него переменную isAuth

    return ConnectedAuthRedirectComponent
}
