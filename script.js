var nextEl = document.querySelector('#next');
var timerEl = document.querySelector('#countdown');
var cursor = 0;

var questions = [
    {
        Headline: "Which of the following is not a class in D&D 5e?",
        answers: {
            a: "Ranger",
            b: "Bard",
            c: "Artificer",
            d: "Priest"
        },
        correct: "d",
    },
    {
        Headline: "Which of the following is not an attribute in D&D 5e?",
        answers: {
            a: "Charisma",
            b: "Power",
            c: "Constitution",
            d: "Wisdom"
        },
        correct: "b",
    }
    {
        Headline: "What does DM inspiration do?",
            a: "It gives you advantage on a roll of your choice.",
            b: "It guarantees that you succeed on every saving throw for the next round of combat.",
            c: "It gives a +10 to your next attack.",
            d: "It provides you a +3 AC for the next minute of game play."
        },
        correct: "a",
    {

    }
    ];

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

buttonContainer.addEventListener('click, function(event)') {
    var answers = event.target;
    if (element.matches("li")) {
        //code here
    }
};

displayQuestion();
displayTime();