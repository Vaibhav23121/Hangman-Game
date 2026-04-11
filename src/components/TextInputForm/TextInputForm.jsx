//isme Text-input-password type
// show/hide
// submit button/fn.
import Button from "../Button/Button.jsx";
import TextInput from "../TextInput/TextInput.jsx";

function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideClick}) {
     
    function handleFormSubmit(e){
        // e means event
        e.preventDefault();
    }

    function handleTextInputChange(event) {
        console.log("text changed");
        console.log(event.target.value);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
            <TextInput
                type={inputType}
                label="Enter a word or a phrase"
                placeholder="Enter a word or Phrase here"
                onChangeaHandler={handleTextInputChange}
            />
            </div>
            <div>
                <Button
                    styleType="warning" 
                    text="Show/Hide"
                    onClickHandler={handleShowHideClick}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    styleType="primary" 
                    text="Submit"
                />
            </div>
        </form>
    )

}


export default TextInputForm;

