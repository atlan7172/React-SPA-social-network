import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' //? это опциональный параметр, необязательный
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;


/*Route - следят за URL, и как только он менятеся они его отрисовывают*/
