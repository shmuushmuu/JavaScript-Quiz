var nextEl = document.querySelector('#next');
var cursor = 0;

var questions = [
    "",
    "",
    "",
    "",
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