import rabbit from '../../../assets/images/rabbit.jpg'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile.photos.large) {         // Если пользователь не зареганный, то показываем картинку по умолчанию
        return <img src={rabbit}/>
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo