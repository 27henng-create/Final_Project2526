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
let playerAnswer = "";
console.log(WordChoice[x]);
//loop -> go through each letter of wordchoice and make a "-" in "playerAnswer" that corresponds to it

i = 0;
while(i < WordChoice[x].length){
    if(WordChoice[x].charAt(i) == " "){
        playerAnswer += " ";
    } else {
        playerAnswer += "-";
    }
    console.log(WordChoice[x].charAt(i));
    alert(playerAnswer);
    i += 1;
} 

console.log(playerAnswer);

while(playerscore < 6){
    if(playerAnswer != WordChoice[x]){
        playerChoice = prompt("Please Enter a Letter").toLowerCase();
    } else if(playerAnswer == WordChoice[x]){
        console.log(`You Guessed the word! The final word was ${WordChoice}!`)
        break;
    }
    
    if (WordChoice[x].includes(playerChoice)){
        console.log(`The string contains the letter ${playerChoice}`)
        alert(`The string contains the letter ${playerChoice}`)
    } else {
        console.log(`The string does not include the letter ${playerChoice}`)
        alert(`The string does not include the letter ${playerChoice}`)
        alert(playerAnswer)
        playerscore +=1
    } 
    //playerChoice = 0

    if(WordChoice[x].includes(playerChoice)){
        
        console.log(playerAnswer)
        alert(playerAnswer)
    }

    if(playerscore == 6){
        console.log(`The final word was ${WordChoice[x]}`)
        alert(`The final word was ${WordChoice[x]}`)
        break;
    }
    // then have the computer replace the dashes with the CORRECT letters
}

