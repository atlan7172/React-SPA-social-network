import * as React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatar.jpg'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) // Тут мы делим кол-во объектов на размер страницы, в итоге получаем кол-во страниц

    let pages = []; //Создаем массив для отрисовки pagesCount

    for (let i = 1; i <= pagesCount; i++) { //в массив pages добавляем кол-во страниц
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && s.selectedPage}// currentPage-активная страница которая отображается
                        onClick={(e) => {           // меняем активную страницу через метод onPageChanged
                            props.onPageChanged(p)
                        }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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