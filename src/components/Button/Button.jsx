// function Button(props){
    
//     console.log(props); //prop is an object in which we return some values in key pair form 
//     return (
//         <button>
//             {props.text}
//         </button>
//     )
// }


// import './Button.css';
import getButtonStyling from "./getButtonStyling";

function Button({text, onClickHandler,styleType='primary',type="button"}){
    // dont have to use props ,desturcture it for what prop you want like texxt
    console.log(text); //prop is an object in which we return some values in key pair form 
    return (
        <button
            onClick={onClickHandler}
            // style={{'backgroundColor':'blue' , 'color':'white'}}
            className= {`px-4 py-2 ${getButtonStyling(styleType)} text-white bg-blue-500`} 
            type={type}
        >
            {text}
        </button>
    );
}






export default Button;