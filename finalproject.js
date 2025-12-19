// This is my code for my Final Project in Programming 1
// Hangman Game:
    // Have a "solo" and a "multiplayer" gamemode 
    // Solo Mode:
        // Give computer many words for it to choose
        // Have the computer recognize how many letters are in the word that is chosen
        // Give the player 6 strikes if they guess wrong 6 times

    // Multiplayer Mode:
    // Let the player put in a 'secret word' and store it and have the player guess it

    // OPTIONAL: Have many different themes like "video game characters", "phrases", etc.

let WordChoice = ["stove", "guitar", "badin high school", "stool", "egg", "metal", "television", "programming", 
    "artificial intelligence", "museum"];
let x = Math.floor(10 * Math.random());
let playerscore = 0;
let playerChoice;
let playerAnswer = [];
let test;
//loop -> go through each letter of wordchoice and make a "-" in "playerAnswer" that corresponds to it

i = 0;
while(i < WordChoice[x].length){
    if(WordChoice[x].charAt(i) == " "){
        playerAnswer.push(" ");
    } else {
        playerAnswer.push("-");
    }
    // console.log(WordChoice[x].charAt(i));
    // alert(playerAnswer);
    i += 1;
} 

console.log(playerAnswer);

let tempString;

while(playerscore < 6){
    test = 0;
    for(let i = 0; i < WordChoice[x].length; i++){
        if(playerAnswer[i] != WordChoice[x].charAt(i)){
            test = 1;
            break;
        }
    }
    
    if(test == 1){
        playerChoice = prompt("Please Enter a Letter").toLowerCase();
    } else {
        console.log(`You Guessed the word! The final word was ${WordChoice[x]}!`);
        alert(`You Guessed the word! The final word was ${WordChoice[x]}!`);
        break;
    }
    
    if (WordChoice[x].includes(playerChoice)){
        console.log(`The string contains the letter ${playerChoice}`)
        alert(`The string contains the letter ${playerChoice}`)
    } else {
        console.log(`The string does not include the letter ${playerChoice}`)
        alert(`The string does not include the letter ${playerChoice}`)
        tempString = '';
        for(let i = 0; i < playerAnswer.length; i++){
            tempString += playerAnswer[i];
        }
        console.log(playerAnswer)
        alert(tempString)
        playerscore +=1
    } 
    //playerChoice = 0
        if(WordChoice[x].includes(playerChoice)){
            for(let i = 0; i < WordChoice[x].length; i++) {
            if(WordChoice[x].charAt(i) == playerChoice) { 
                playerAnswer[i] = playerChoice;
            } 
        }

        tempString = '';
        for(let i = 0; i < playerAnswer.length; i++){
            tempString += playerAnswer[i];
        }
        console.log(playerAnswer)
        alert(tempString)
    } else {
    }
    if(playerAnswer[i] == WordChoice[x]){

        console.log(`Good Job! You guessed the word. The finall word was ${WordChoice[x]}`)
        alert(`Good Job! You guessed the word. The finall word was ${WordChoice[x]}`)
        break;
    }
    }
    if(playerscore == 6){
        console.log(`The final word was ${WordChoice[x]}`)
        alert(`The final word was ${WordChoice[x]}`)
        i += 1
    }


