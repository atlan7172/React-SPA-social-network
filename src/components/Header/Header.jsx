import s from './Header.module.css'
import image from '../../assets/images/header-wallpaper.jpg'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={image}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : // если isAuth true, тогда отрисовываем login пользователя, isAuth становится тру когда мы получаем пользователя из сервера
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header