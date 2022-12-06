var nextEl = document.querySelector('.next');
var timerEl = document.querySelector('.countdown');
var buttonEl = document.querySelector('#answers');
var startEl = document.querySelector('#start');
var cursor = 0;
var secondsLeft = 75;
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
            d: "Wisdom",
        },
        correct: "b",
    },
    {
        Headline: "What does DM inspiration do?",
        answers: {
            a: "It gives you advantage on a roll of your choice.",
            b: "It guarantees that you succeed on every saving throw for the next round of combat.",
            c: "It gives a +10 to your next attack.",
            d: "Sam, DM inspiration isn't a thing. Loser.",
        },
        correct: "a",
    },    
    {
        Headline: "Which subrace of elf gets a +1 to their charisma?",
        answers: {
            a: "High Elf",
            b: "Wood Elf",
            c: "Dark Elf",
            d: "Sam, no elves get a +1 to charisma. Idiot.",
        },
        correct: "c",
    },
    {
        Headline: "What dice would you roll for an athletics check?",
        answers: {
            a: "d12",
            b: "d20",
            c: "d100",
            d: "Sam, you don't roll for an athletics check. Dork.",
        },
        correct: "b",
    },
    {
        Headline: "What following monster are you actually able to play?",
        answers: {
            a: "Dragon",
            b: "Werewolf",
            c: "Lich",
            d: "Sam, you can play whatever you and your DM agree upon... but man, you're handsome. Wow."
        },
        correct: "d",
    }
    ];

function displayTime() {
    var label = "seconds";
    if (secondsLeft === 1) {
        label = "second";
    } 
    timerEl.textContent = secondsLeft + " " + label + "left on the clock!";
}
function countdown() {
    displayTime(secondsLeft);
    var timeInterval = setInterval(function() {
        secondsLeft--;
        displayTime(secondsLeft);
    
        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            alert("TIME'S UP!");
    }
  }, 1000);
}


startEl.addEventListener('click', advance);

var displayQuestion = function() {
    nextEl.textContent = questions[cursor];
}

var advance = function() {
    displayQuestion();
    displayTime();
    if (cursor < questions.length -1) {
        cursor++;
    }
};

//buttonContainer.addEventListener('click, function(event)') {
//    var answers = event.target;
//    if (element.matches("li")) {
        //code here
//    }
//};

displayQuestion();
displayTime();
countdown();