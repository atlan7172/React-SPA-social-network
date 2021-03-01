import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/avatar.jpg";
import s from "./Users.module.css";
import * as React from "react";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)  //thunk
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)    //thunk
                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>Kazakhstan</div>
                        <div>Astana</div>
                    </span>
                </span>
        </div>
    )
}

export default User