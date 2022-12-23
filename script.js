// declared and expressed variables at the top
var container = document.querySelector('.container');
var nextEl = document.querySelector('#next');
var timerEl = document.querySelector('.countdown');
var startEl = document.querySelector('#startButton');
var quizEl = document.querySelector('.quizContainer');
var gameOver = document.querySelector('.gameOver');
var questions = document.querySelectorAll('.question');
var highScores = document.querySelector('.highScores');

var cursor = 0;
var secondsLeft = 75;
var answers = ["a", "b", "a", "c", "b", "d"]

// functions in the middle
var advance = function () {
    var correct = true;
    //  displayQuestion();
    //  displayTime();
    if (cursor < questions.length - 1) {
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
    var timeInterval = setInterval(function () {
        secondsLeft--;
        displayTime(secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            alert("TIME'S UP!");
        }
    }, 1000);
}



var displayNextQuestion = function () {
    for (var question of questions) {
        console.log(question);
        if (question.CDATA_SECTION_NODE.index != cursor) {
            question.style.display = 'none';
        } else {
            hameOver.style.display = 'block';
            var initials = prompt('Enter Initials');
            saveHiScore(initials);
            displayStoredPlayer();
        }
    }
}

var displayGameOver = function () {
    console.log(gameOver);
    if (gameOver.dataset.index != cursor) {
        gameOver.style.display = 'none';
    } else {
        gameOver.style.display = 'block';
        var initials = prompt('Enter Initials');
        saveHighScore(initials);
        displayStoredPlayer();
    }
}

var saveHighScore = function (initials) {
    var newScore = {
        playerInitials = initials,
        score: numCorrectAnswers,
    };
    localStorage.setItem('score', JSON.stringify(newScore));
}

var displayStoredPlayer = function() {
    var storedPlayer = localStorage.getItem('score');
    var playerObject = JSON.parse(storedPlayer);
    score.textContent = playerObject.playerInitials + ": score = " + playerObject.score;
}

// Events at the bottom

startEl.addEventListener('click', advance); {
    countdown();
    displayQuestion();
    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    quizEl.style.display = "block";
}

buttonContainer.addEventListener('click,' function (event)) {
    var element = event.target;
    if (element.matches("button")) {
        advance()
    }
};



displayNextQuestion();
displayTime();
countdown();