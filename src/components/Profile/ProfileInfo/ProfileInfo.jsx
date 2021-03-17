import rabbit from '../../../assets/images/rabbit.jpg'
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        props.savePhoto(e.target.files[0])
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || rabbit}/>
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                <div>
                    <div>
                        <b>Full name</b>: {props.profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {props.lookingForAJob &&
                    <div>
                        <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        <b>About me</b>: {props.profile.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>: {}
                    </div>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

const Contacts = (props) => {
    return <div><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

export default ProfileInfo