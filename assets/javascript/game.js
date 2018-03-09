//All available choices for letter's in the alphabet
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Starting all var to 0
var wins = 0;
var losses = 0; 
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];

//Computer gets to randomly selects a letter from the available choices of the alphabet
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//The user gets 9 guesses
var updateGuessesLeft = function() {

    //Guesses left
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
};

var updateLettertoGuess = function() {
    this.updateLettertoGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

//Displays the users attempted guesses
var updateGuessesSoFar = function() {
    document.querySelector("#let").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
};

//Resetting everything when function is displayed
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLettertoGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//Onkeyup is the users guess
document.onkeyup = function(event){
guessesLeft--;
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

guessedLetters.push(userGuess);
updateGuessesLeft();
updateGuessesSoFar();

    //If you guessed the correct letter this alert will pop up
    if (guessesLeft > 0){  
        if (userGuess == letterToGuess){
            wins++;
            document.querySelector("#Wins").innerHTML = "Wins: " + wins;
            alert("Wow! You can read my mind!");
            reset();
        }
        
        //If you guess incorrectly you'll get this alert and game will reset
        } else if(guessesLeft == 0){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("Probably didn't see that coming? Better luck next time!");
            reset();
        }
    };