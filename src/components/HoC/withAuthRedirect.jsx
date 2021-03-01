import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({              //withAuthRedirect должен знать isAuth, иначе не будет знать когда отрисовыввать
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {    //HOC - защищает от незаристрированных пользователей

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to='/login'/>
            else return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
