var nextEl = document.querySelector('#next');
var timerEl = document.querySelector('#countdown');
var cursor = 0;

var questions = [
    "I would use this function to tell my Java Script what to do when a user clicks on a button.",
    "What punctuation is used for an array?",
    "What is used to tell a function to run until a certain requirement is met?",
    "What would you use to select multiple elements from your HTML at the same time?",
    "What tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would?",
];
var answers = ["a, b, c, d"];
var secondsLeft = 75;

function displayTime() {
    var label = "seconds";
    if (secondsLeft === 1) {
        label = "second"
    } 
    timerEl.textContent = seconds +  " " + label + "left on the clock!";
}

function countdown() {
    displayTime();
    var timeInterval = setInterval(function() {
        secondsLeft--;
        displayTime();
    
        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            alert("TIME'S UP!");
    }
  }, 1000);
}

var displayQuestion = function() {
    nextEl.textContent = questions[cursor];
}

var advance = function() {
    if (cursor < questions.length -1) {
        cursor++;
    }
    displayQuestion();
};

nextEl.addEventListener('click', advance);

displayQuestion();
displayTime();