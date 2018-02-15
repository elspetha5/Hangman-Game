// Way to count wins
// Way to insert current word
// Way to change each blank space into a the letter it's supposed to be
// Count down number of guesses and reset with new words
// Insert letters already guessed in to space
// Reset when word is guessed
// Don't count letters already guessed
// What happens when someone wins


// array of options 

//var wins = document.getElementById("#wins");
var word = document.getElementById("word");
//var guesses = document.getElementById("#guesses");
//var letters = document.getElementById("#letters");

// var userGuess = event.key;
var answer = ["c", "a", "t"];



document.onkeyup = function (event) {
    var userGuess = event.key;
    //make lowercase
    //make it happen only once
    for (var i = 0; i < answer.length; i++) {
        var space = document.createElement("span");
        space.innerHTML = "_ ";
        word.appendChild(space);
    }

    //how to insert correct letter in correct spot
    if (userGuess === answer[0]) {
        var rightChoice = document.createElement("div");
        rightChoice.id = "new"
        var getNew = document.getElementById("new");
        space.removeChild(space.childNodes[0]);
        getNew.innerHTML = answer[0];
    }
};