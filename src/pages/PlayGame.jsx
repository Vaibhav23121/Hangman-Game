import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText.jsx" ;   
import LetterButtons from "../components/LetterButtons/LetterButton.jsx" ;
import Hangman from "../components/Hangman/Hangman.jsx" ;

function PlayGame() {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));
    // const {text} = useParams();
    const { state } = useLocation();

    const [guessedLetters,setGuessedLetters] = useState([]);
    const [step,setStep] = useState(0);

    function handleLetterClick(letter){
        console.log("Clicked:", letter);
        if (state.wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct')
        }   else{
            console.log("wrong")
            setStep(step+1)
        }    
         //new array bnaye and gussedLetters ko destructure keke usme add kra
        setGuessedLetters([...guessedLetters,letter]);
    }

        return (
            <>
                <h1>PlayGame</h1>

                <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters}/>

                <div>
                <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
                </div>
                <div>
                    <Hangman step={step}/>
                </div>

                <Link to="/start" className="text-blue-400" >PlayGameLink</Link>
            </>
        )
    }
    
export default PlayGame;