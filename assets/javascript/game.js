//What variables do we need?
var wins = document.getElementById("wins");
var word = document.getElementById("word");
var guessesLeft = document.getElementById("guessesLeft");
var letters = document.getElementById("letters")

var answer = ["cat", "doga", "tigera"];

document.onkeyup = function (event) {
    var alpha = event.key;
    var userGuess = alpha.toLowerCase();
    var wordText = word.innerHTML;
    console.log(alpha);


    //How do we start the game?
    if (wordText.length == 0) {
        //choose a random word
        var idx = Math.floor(Math.random() * answer.length)
        pickWord = answer[idx];
        var wordElements = pickWord.split("");
        for (var i = 0; i < wordElements.length; i++) {
            var space = document.createElement("span");
            space.innerHTML = "_ ";
            word.appendChild(space);
        }
        guessesLeft.innerHTML = 12;
    } else if (wordText.length > 0) {
        var wordElements = pickWord.split("");
        console.log(wordElements, pickWord);
        for (var i = 0; i < wordElements.length; i++) {
            if (userGuess === wordElements[i]) {
                wordElements[i].innerHTML = userGuess;
            } else { };
        }

    }

    /*} else if (wordText.length > 0) {
        for (var i = 0; i < pickWord;)
            pickWord[i].innerHTML = alpha;
    } else if (alpha != pickWord[i]) {
        var wrong = document.createElement("span");
        wrong.innerHTML = alpha + ", ";
        letters.appendChild(wrong);
    }*/
};



//What happens when user presses a letter?
    //recognize event

    //store guessed letter in a variable
    //What happens when user makes a wrong guess?
        //put letter in wrong space
        //make the guess count go down by one
    //What happens when user makes a right guess?
        //put letter in appropriate space in the word

//What happens when user wins?
    //screen gives congratulations message
    //changes to a new word
    //resets guesses
    //clears wrong letters

//What happens when user runs out of guesses?
    //screen gives sadface
    //shows answer
    //changes to a new word
    //resets guesses
    //clears wrong letters











/*
//var wins = document.getElementById("#wins");
var word = document.getElementById("word");
//var guesses = document.getElementById("#guesses");
//var letters = document.getElementById("#letters");

// var userGuess = event.key;
var answer = ["cat", "dog", "tiger"];

document.onclick = function (event) {
    pickWord = answer[Math.floor(Math.random() * answer.length)];
}

//user guesses
document.onkeyup = function (event) {
    var alpha = event.key;
    var userGuess = alpha.toLowerCase();
    for (var i = 0; i < pickWord.length; i++) {
        if (userGuess !== pickWord[i]) {
            var space = document.createElement("span");
            space.innerHTML = "_ ";
            word.appendChild(space);
        } else {
            pickWord.innerHTML = pickWord[i];
        }

    }

    //}
};

//if guess is right then put letter, else put space
//1 function to check character, one to create box btn.setAttribute("id", "position", + i)
//grab with position[1], position[2], etc.

function gamePlay() {
    //onkeyup show correct guesses on correct space
    //show wrong guesses on letters
    //count down how many guesses they have left
};

function win() {
    //when whole word is guessed wins++
    //reset newWord
    //change picture or something
};

function lose() {
    //cover screen with sad face
}

/*document.onkeyup = function (event) {
    var userGuess = event.key;
    userGuess.toLowerCase();
    //make it happen only once
    for (var i = 0; i < answer.length; i++) {
        var space = document.createElement("span");
        space.setAttribute("id", "guess[i]");
        space.innerHTML = "_ ";
        word.appendChild(space);
    }*/

    //how to insert correct letter in correct spot
   /* if (userGuess === answer[0]) {
        var rightChoice = document.createElement("div");
        rightChoice.id = "new"
        var getNew = document.getElementById("new");
        space.removeChild(space.childNodes[0]);
        getNew.innerHTML = answer[0];
    }*/
//};*/