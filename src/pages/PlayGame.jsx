import { Link, useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText.jsx" ;   

function PlayGame() {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));
    // const {text} = useParams();
    const { state } = useLocation();
        return (
            <>
                <h1>PlayGame {state.wordSelected}</h1>

                <Maskedtext text={state.wordSelected} guessedLetters={[]}/>
                <Link to="/start" className="text-blue-400" >PlayGameLink</Link>
            </>
        )
    }
    
    export default PlayGame;