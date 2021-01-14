import * as React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setCurrentPage, setUsers,
    setTotalUsersCount, toggleIsFetching, unfollow,
} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader/Preloader";
import usersAPI from "../../api/api";


let mapStateToProps = (state) => { //Функция которая содержит Стэйт(данные) из store, и мы их передаем в UsersContainer
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true) // создает картинку, когда файлы подгружаются
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false) // картина загрузки исчезает, так как с сервера получиди данные
            this.props.setUsers(data.items)// передаем значения в массив
            this.props.setTotalUsersCount(data.totalCount) //Берем с сервера общее кол-во людей  и присваиваем переменной totalUsersCount
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)//создает картинку, когда файлы подгружаются
        this.props.setCurrentPage(pageNumber) //меняет активную страницу
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)// картина загрузки исчезает, так как с сервера получиди данные
            this.props.setUsers(data.items)// в параметры передаем значения которые мы получили от сервера, и метод их присваивает Стэйту
        })
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
                   unfollow={this.props.unfollow}/>
        </>
    }

}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching
})(UsersContainer)

