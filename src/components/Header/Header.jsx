import s from './Header.module.css'
import image from '../../assets/images/header-wallpaper.jpg'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={image}/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div> {props.login} - <button onClick={props.logoutThunk}> Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header