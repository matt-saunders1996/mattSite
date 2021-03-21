// @ts-check
// Declarations
var squares = document.querySelectorAll(".square");
var newGame = document.querySelector("#newColours");
var gameFeedback = document.querySelector("#gameFeedback");
var correctAnswer = rgbSetString();
var containerDisplay = document.querySelector(".container");
var rgbDisplay = document.querySelector("#rgbTitle");

var btn1 = document.querySelectorAll(".btn-primary");
var ezButton = document.querySelector("#ezButton");
var hrdButton = document.querySelector("#hrdButton");

var hardSquares = document.getElementsByClassName(".squareHard");
var hardGame = true;
rgbDisplay.textContent = correctAnswer;
rgbDisplay.style.color = "black";


// Functions
// This generates an array of rgb values 
function rgbSetString() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

// Are the rgb values greater or less than 100? Add a zero for nicer display?
// Im not currently calling this function
function ltc(x) {
    if (x < 100) {
        return "0"
    } else {
        return ""
    }
}

function getRandomEzInt() {
    min = Math.ceil(0);
    max = Math.floor(3);
    return Math.floor(Math.random() * (3 - 0) + 0); //The maximum is exclusive and the minimum is inclusive
};

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(6);
    return Math.floor(Math.random() * (6 - 0) + 0); //The maximum is exclusive and the minimum is inclusive
};
function successColours() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = correctAnswer;
        // return colours[random];
    }
};

function newEasyGame() {
    hardGame = false;
    correctAnswer = rgbSetString();
    rgbDisplay.textContent = correctAnswer;
    colourEzSquares();
    squares[getRandomEzInt()].style.background = correctAnswer;

    ezButton.classList.add("btn-light");
    ezButton.classList.remove("btn-primary");

    hrdButton.classList.remove("btn-light");
    hrdButton.classList.add("btn-primary")

    squares[3].style.display = "none";
    squares[4].style.display = "none";
    squares[5].style.display = "none";

    rgbDisplay.style.color = "black";
    gameFeedback.textContent = "";
};

function newHardGame() {
    hardGame = true;
    ezButton.classList.remove("btn-light");
    ezButton.classList.add("btn-primary");

    hrdButton.classList.add("btn-light");
    hrdButton.classList.remove("btn-primary");

    correctAnswer = rgbSetString();
    rgbDisplay.textContent = correctAnswer;
    colourTheSquares()
    squares[getRandomInt()].style.background = correctAnswer;
    rgbDisplay.style.color = "black";
    gameFeedback.textContent = "";

    squares[3].style.display = "inline";
    squares[4].style.display = "inline";
    squares[5].style.display = "inline";
};

// Colouring the Sqaures
function colourTheSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = rgbSetString();

        // -------------------------------------
        // now for the game interactivity:
        // add click listener to each square
        squares[i].addEventListener("click", function () {
            // grab colour of clicked square
            var clickedColour = this.style.background;
            // compare colour to picked colour
            if (clickedColour === correctAnswer) {
                gameFeedback.textContent = "correct!";
                rgbDisplay.style.color = clickedColour;
                successColours(clickedColour);
                console.log(clickedColour, correctAnswer);
                newGame.textContent = "Play Again?";

            } else {
                this.style.background = "#232323";
                console.log(clickedColour, correctAnswer);
                gameFeedback.textContent = "Try Again!";
            }
        });
    }
};

function colourEzSquares() {
    for (var i = 0; i < 4; i++) {
        squares[i].style.background = rgbSetString();

        // -------------------------------------
        // now for the game interactivity:
        // add click listener to each square
        squares[i].addEventListener("click", function () {
            // grab colour of clicked square
            var clickedColour = this.style.background;
            // compare colour to picked colour
            if (clickedColour === correctAnswer) {
                gameFeedback.textContent = "correct!";
                rgbDisplay.style.color = clickedColour;
                successColours(clickedColour);
                console.log(clickedColour, correctAnswer);

            } else {
                this.style.background = "#232323";
                console.log(clickedColour, correctAnswer);
                gameFeedback.textContent = "Try Again!";
            }
        });
    }
};


// set logic and display for page
colourTheSquares()
squares[getRandomInt()].style.background = correctAnswer;



// Buttons
newGame.addEventListener("click", function () {
    if (hardGame == true) {
        newHardGame()
        newGame.textContent = "New Colours";
    }
    else if (hardGame == false) {
        newEasyGame()
        newGame.textContent = "New Colours";
    }


});

ezButton.addEventListener("click", function () {
    newEasyGame()
    hardGame = false;
    newGame.textContent = "New Colours";
});

hrdButton.addEventListener("click", function () {
    newHardGame()
    hardGame = true;
    newGame.textContent = "New Colours";
}); 