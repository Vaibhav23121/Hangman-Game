// import './App.css';
import {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer.jsx';
import StartGame from './pages/StartGame.jsx';
import PlayGame from './pages/PlayGame.jsx';
import Home from './pages/Home.jsx';
import {WordContext} from "./components/context/WordContext.js"





function App() {
 
  const [ wordList, setWordList ] = useState([]);
  const [word,setWord] = useState("");

  return (
    <div>
      {/* hello world
      //here we are passing text="Click Me" as key value pair called props and react club all of them ,U can acces throgh props
      <Button text="Click Me" more="Something"/>  */}
      {/* <Button text="Click Me1" styleType='danger' onClickHandler={() => console.log("clickMe1")
      } /> */}
      
      <WordContext.Provider value={{wordList, setWordList, word, setWord}}>
        {/* by wrapping whole app by WordContext.Provider so that we can access WordContext from anywhere */}
      {/* wahtever we store in value property get stored in storage  */}
      <Routes>
        <Route path="/start" element={<StartGame/>} />
        <Route path='/play' element={<PlayGame/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </WordContext.Provider>

    </div>
  )
}

export default App
