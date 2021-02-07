import * as React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers,
} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../HoC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/usersSelectors";

// let mapStateToProps = (state) => {                         //Функция которая принимает в параметры state, имеет доступ к store
//     return {
//         users: state.usersPage.users,                      // Массив пользователей, которые отображены на данный момент
//         pageSize: state.usersPage.pageSize,                // Кол-во пользователей на одной странице
//         totalUsersCount: state.usersPage.totalUsersCount,  // Общее кол-во пользователей, получаем с Сервера
//         currentPage: state.usersPage.currentPage,          // Текущая страница (выделенная)
//         isFetching: state.usersPage.isFetching,             // Переменная которая отвечает за Preloader
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

class UsersContainer extends React.Component {

    componentDidMount() {                           //Метод жизненного цикла, который выполняется только когда объект создается. Единожды
        this.props.getUsers(this.props.currentPage, this.props.pageSize); //thunk, получаем с сервера пользователей, вносим их в userReducer.state.users
    }

    onPageChanged = (pageNumber) => { // Метод который меняет активную страницу
        this.props.getUsers(pageNumber, this.props.pageSize); //thunk, получаем с сервера пользователей, вносим их в userReducer.state.users
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

export default compose(                        // Упрощенный синтаксис оборачивания Компонент
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        getUsers, toggleFollowingProgress
    }))(UsersContainer);         // Функция, которая отвечает за Логинизацию, если незалогинены, то скрывает Компонент
