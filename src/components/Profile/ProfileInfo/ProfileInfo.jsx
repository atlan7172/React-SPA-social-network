import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='https://i.pinimg.com/originals/57/bb/66/57bb66cb4895565d755910654a6b0c80.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo