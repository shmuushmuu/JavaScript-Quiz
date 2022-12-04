var nextEl = document.querySelector('#next');
var cursor = 0;

var questions = [
    "Which of the following is not a class in Dungeons and Dragons 5th Edition?",
    "Which of the following is not a damage type in D&D 5e?",
    "Which of the following is not a school of magic in D&D 5e?",
    "What is the maximum amount magical items a player character can attune to in D&D 5e?",
];

var answers = ["a, b, c, d"];

var displayQuestion = function () {
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