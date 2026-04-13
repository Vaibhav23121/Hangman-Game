// import './App.css';
import { Routes, Route } from "react-router-dom";
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer.jsx';
import StartGame from './pages/StartGame.jsx';
import PlayGame from './pages/PlayGame.jsx';





function App() {

  return (
    <div>
      {/* hello world
      //here we are passing text="Click Me" as key value pair called props and react club all of them ,U can acces throgh props
      <Button text="Click Me" more="Something"/>  */}
      {/* <Button text="Click Me1" styleType='danger' onClickHandler={() => console.log("clickMe1")
      } /> */}
      
      
      <Routes>
        <Route path="/start" element={<StartGame/>} />
        <Route path='/play' element={<PlayGame/>}/>
      </Routes>

    </div>
  )
}

export default App
