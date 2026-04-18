function MaskedText({ text, guessedLetters }) {
  
  const maskedString = text.toUpperCase().split("").map((letter) => {
    return guessedLetters.includes(letter) ? letter : "_";
  });

  return (
    <>
      {maskedString.map((letter, index) => (
        <span key={index} className="mx-1 text-2xl">
          {letter}
        </span>
      ))}
    </>
  );
}

export default MaskedText;






// function Maskedtext({text, guessedLetters}) {
//     const maskedString = get
//     MaskedString(text,guessedLetters);

//     return(
//         <>
//             {maskedString.map((letter,index)=>{
//                 return (
//                     <span key={index} className="mx-1">
//                         {letter}    
//                     </span>
//                 )
//             }
//             )}
//         </>
//     )
// }


// export default Maskedtext;