import { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText.jsx" ;   
import LetterButtons from "../components/LetterButtons/LetterButton.jsx" ;
import Hangman from "../components/Hangman/Hangman.jsx" ;
import {WordContext} from "../components/context/WordContext.js" ;
function PlayGame() {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));
    // const {text} = useParams();
    // const { state } = useLocation();

    const {word} = useContext(WordContext);//jo context access krwara tha useey as a parameter expect krta hai and return an object all value passed in value prop

    const [guessedLetters,setGuessedLetters] = useState([]);
    const [step,setStep] = useState(0);

    function handleLetterClick(letter){
        console.log("Clicked:", letter);
        if (word?.toUpperCase().includes(letter)) {
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
                {/* {wordList.map(wordObject => <li key={wordObject.id}>{wordObject.wordValue} </li> )} */}
                {/* accessing word from WordContext. We store the word in WordContext so that we can access it from anywhere and printing too*/}
                

                {word && (
                    <>
                       <Maskedtext text={word} guessedLetters={guessedLetters}/>

                        <div>
                        <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
                        </div>
                        <div>
                            <Hangman step={step}/>
                        </div>
                            </>
                )}

                <div>
                <Link to="/" className="text-blue-400">Home</Link>
                </div>
                <Link to="/start" className="text-blue-400" >PlayGameLink</Link> 
            </>
        )
    }
    
export default PlayGame;