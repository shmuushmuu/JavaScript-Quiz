var nextEl = document.querySelector('#next');
var timerEl = document.querySelector('.countdown');
var startEl = document.querySelector('#startButton');
var quizEl = document.querySelector('.quiz');
var gameOver = document.querySelector('.gameOver');
var questions = document.querySelectorAll('.question');

var cursor = 0;
var secondsLeft = 75;
var answers = ["a", "b", "a", "c", "b", "d"]
    
var advance = function() {
    displayQuestion();
    displayTime();
    if (cursor < questions.length -1) {
        cursor++;
    }
    };

function displayTime() {
    var label = "seconds";
    if (secondsLeft === 1) {
        label = "second";
    } 
    timerEl.textContent = secondsLeft + " " + label + " left on the clock!";
}
function countdown() {
    displayTime(secondsLeft);
    var timeInterval = setInterval(function() {
        secondsLeft--;
        displayTime(secondsLeft);
    
        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            alert("TIME'S UP!");
    }
  }, 1000);
}


startEl.addEventListener('click', advance);

var displayQuestion = function() {
    nextEl.textContent = questions[cursor];
}


//buttonContainer.addEventListener('click, function(event)') {
//    var answers = event.target;
//    if (element.matches("li")) {
        //code here
//    }
//};

displayQuestion();
displayTime();
countdown();