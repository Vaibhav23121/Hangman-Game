import {Link} from 'react-router-dom';
// import {PlayGame} from "./PlayGame.jsx";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer.jsx";
function StartGame() {

    return (
        <>
            <h1>StartGame</h1>
            <TextInputFormContainer/>
            <Link to="/play" ClassName='text-blue-400'>Play Game Link</Link>
        </>
    )    
}

export default StartGame;