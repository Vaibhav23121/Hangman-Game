
import { useState } from "react";
import TextInputForm from "./TextInputForm.jsx";
import { useNavigate } from "react-router-dom";
// import { PlayGame } from "../../pages/PlayGame.jsx";

function TextInputFormContainer() {
    
    //react hooks are the special fn./category of fn. make for designated fn. 
    //react genrally doesnt track the element for changing in ui but by using hooks we can do change in ui with change in data
    //react give us fn. useState(is a hook)
    const[inputType, setInputType] = useState("password");
    //setInputType is a updater function we alaways update inputType by USING setInputType FN.

    const [value,setValue] =  useState("");
    const navigate = useNavigate(); //is a hook that return a navigate function

    // let inputType="password";
    function handleFormSubmit(event){
        // event lsitenar
        event.preventDefault();
        console.log("form submitted",value);
        if(value){
            setTimeout(() => {
                navigate("/play");  
            }, 5000);
            //if we have some valid value then navigate to play game page
                  
        }
    
    }
    // these are boath Logiacal layer
    function handleTextInputChange(event) {
        console.log("text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }
    function handleShowHideClick(){
        console.log("show/hide clicked");
        if (inputType === "password"){
            setInputType("text")
        }else{
            setInputType("password")
        }
        console.log(inputType);
    }

    return(
        //calling presintation layer
    <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
    />
)
    
}



export default TextInputFormContainer;