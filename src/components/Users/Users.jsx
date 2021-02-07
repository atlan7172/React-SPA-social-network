import * as React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatar.jpg'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) // Тут мы делим общее кол-во пользователей на размер страницы, получаем кол-во страниц

    let pages = []; // Создаем массив который содержит кол-во страниц

    for (let i = 1; i <= pagesCount; i++) { // Заполняем массив
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && s.selectedPage}// currentPage-активная страница которая отображается
                        onClick={() => {                                     // меняем активную страницу через метод onPageChanged
                            props.onPageChanged(p)
                        }}>{p}</span>
                })}
            </div>
            {
                // Отрисовываем массив users
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?          //
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)  //thunk
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)    //thunk
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>Kazakhstan</div>
                        <div>Astana</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

export default Users