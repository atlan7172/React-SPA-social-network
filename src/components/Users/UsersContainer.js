import * as React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers,
} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/usersSelectors";

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),                             // Массив пользователей, которые отображены на данный момент
        pageSize: getPageSizeSelector(state),                       // Кол-во пользователей на одной странице
        totalUsersCount: getTotalUsersCountSelector(state),         // Общее кол-во пользователей, получаем с Сервера
        currentPage: getCurrentPageSelector(state),                 // Текущая страница (выделенная)
        isFetching: getIsFetchingSelector(state),                   // Переменная которая отвечает за Preloader
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); //Санка, получаем пользователей
    }

    onPageChanged = (pageNumber) => {                                     //Функция которая меняет текущую страницу
        this.props.getUsers(pageNumber, this.props.pageSize);             //Санка, получаем пользователей
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

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        getUsers, toggleFollowingProgress
    }))(UsersContainer);
