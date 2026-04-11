
import { useState } from "react";
import TextInputForm from "./TextInputForm.jsx";

function TextInputFormContainer() {
    
    //react hooks are the special fn./category of fn. make for designated fn. 
    //react genrally doesnt track the element for changing in ui but by using hooks we can do change in ui with change in data
    //react give us fn. useState(is a hook)
    const[inputType, setInputType] = useState("password");
    //setInputType is a updater function we alaways update inputType by USING setInputType FN.

    // let inputType="password";
    function handleFormSubmit(event){
        // e means event
        event.preventDefault();
    }
    // these are boath Logiacal layer
    function handleTextInputChange(event) {
        console.log("text changed");
        console.log(event.target.value);
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