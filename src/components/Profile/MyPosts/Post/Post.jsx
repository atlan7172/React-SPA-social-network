import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://liquipedia.net/commons/images/4/41/Slardar_Large.png'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post