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

let WordChoice = ["Stove", "Guitar", "Badin High School", "Stool", "Egg", "Metal", "Television", "Programming", 
    "Artificial Intelligence", "Museum"];
x = Math.floor(Math.random());
let playerscore = 0;
let playerChoice
while(playerscore < 6){
    WordChoice[x]
    playerChoice = prompt("Please Enter a Letter") .toLowerCase();

    if(playerChoice = WordChoice){
        console.log(`You Guessed the word! The final word was ${WordChoice}!`)
    } else {
        console.log(`The letter ${playerChoice} was not in the word.`)
        alert(`The letter ${playerChoice} was not in the word`)
        playerscore += 1
    }
    playerChoice = 0
}