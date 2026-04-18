import { Link } from "react-router-dom";
import Button from "../components/Button/Button.jsx";
import { useContext } from "react";
import { useEffect } from "react";
import { WordContext } from "../components/context/WordContext";

function Home() {
    // const [word,setWord] = useState("");
    const { setWordList,setWord} = useContext(WordContext);//jo context access krwara tha useey as a parameter expect krta hai and return an object all value passed in value prop


    async function fetchWords(){
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();
        // console.log(data);
        setWordList([...data])//made a new array and destructure it

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);

        // const randomWord = data[randomIndex];
        // setWord(randomWord); 
    }


    useEffect(()=>{
        fetchWords();
    },[]);

    return(
        <>
            <Link to="/play" >
                <Button text="Single Player Game" />
            </Link>
            <br />
            <Link to="/start" >
                <div className="mt-4">
                    <Button text="Multi Player Game" styleType="secondry"/>
                </div>
                
            </Link>
        </>
    )
}

export default Home;