import load from "../../../assets/images/load.svg";
// Компонента которая просто отображает картинку заргузки
let Preloader = (props) => {
    return (
        <div>
            <img src={load}/>
        </div>
    )
}

export default Preloader