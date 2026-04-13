// @param {the word which is given as input and is expected to be guessed} originalWord
// @param { Letters which are guessed by the user already } guessedLetters





export funtion getMaskedString(originalWorld,guessedLetters){
    guessedLetters = guessedLetters.map(letter=>letter.toUpperCase());//["h","E"."l"]
 
    const guessedLettetsSet = new Set(guessedLetters);//make the searching faster and optimise the code

    const result = orignalWorld.toUpperCase().split("").map(char=>{
        if(gussedLettetsSet.has(char)){
            return char;
        }
        else{
            return "_";
        }
    });
    return result; 
    
}