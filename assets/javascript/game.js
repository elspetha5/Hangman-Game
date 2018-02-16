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
    //pick a random word from answer array
    var userGuess = event.key;
    for (var i = 0; i < pickWord.length; i++) {
        if (userGuess === pickWord[i]) {
            var space = document.createElement("span");
            space.innerHTML = "_ ";

        }

    }

    //}
};

//if guess is right then put letter, else put space

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
//};