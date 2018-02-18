//What variables do we need?
var wins = document.getElementById("wins");
var word = document.getElementById("word");
var guessesLeft = document.getElementById("guessesLeft");
var letters = document.getElementById("letters")

var answer = ["cat", "dog", "tiger"];
var wordElements;
var wordAnswer;
var lettersGuessed;


document.onkeyup = function (event) {
    var alpha = event.key;
    var userGuess = alpha.toLowerCase();
    var wordText = word.innerHTML;


    //How do we start the game?
    if (wordText.length == 0) {
        //choose a random word
        var idx = Math.floor(Math.random() * answer.length)
        pickWord = answer[idx];
        //turns our random word into a stored array
        wordElements = pickWord.split("");
        //creates a new array with the length of above array
        //used to store correct letters that have been guessed
        wordAnswer = new Array(wordElements.length);
        //creates new array to store wrong letters guessed
        lettersGuessed = new Array();
        //places appropriate number of spaces on the page for word selected by pickWord
        for (var i = 0; i < wordElements.length; i++) {
            var space = document.createElement("span");
            space.innerHTML = "_ ";
            word.appendChild(space);
        }
        //sets Guesses Remaining to 12
        guessesLeft.innerHTML = 12;
    }

    //How do we play the game?
    else {
        //checks if the user guess is correct or not
        //stores correct guesses in appropriate index in wordAnswer array
        //stores blank space for incorrect guesses in wordAnswer array
        for (var i = 0; i < wordElements.length; i++) {
            if (userGuess === wordElements[i]) {
                wordAnswer[i] = userGuess;
            } else if (wordAnswer[i] === undefined) {
                wordAnswer[i] = "_";
            //supposed to only put incorrect guesses in lettersGuessed array
            //don't know why it's adding correct ones as well
            //don't know where to put the guessesLeft so it only decrements once...
            } else if (userGuess != wordElements[i]) {
                lettersGuessed.push(userGuess[i]);
                guessesLeft.innerHTML--;
            } else { };
        }

        //Supposed to change wins up by one, and reset board
        //For some reason it's not recognizing when wordAnswer === wordElements
        console.log(wordAnswer, wordElements, lettersGuessed);
        if (wordAnswer === wordElements) {
            console.log("winner");
            wins.innerHTML++;
            word.innerHTML = "";
        } else { };

        //displays letters guessed and blank spaces remaining on screen
        word.innerHTML = wordAnswer.join(" ");

        //displays incorrect guesses
        letters.innerHTML = lettersGuessed.join(" ");
    };
};