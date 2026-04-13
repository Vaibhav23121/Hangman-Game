//isme Text-input-password type
// show/hide
// submit button/fn.
import Button from "../Button/Button.jsx";
import TextInput from "../TextInput/TextInput.jsx";

function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideClick}) {
     
    

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
            <TextInput
                type={inputType}
                label="Enter a word or a phrase"
                placeholder="Enter a word or Phrase here"
                onChangeHandler={handleTextInputChange}
            />
            </div>
            <div>
                <Button
                    type="button"
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

