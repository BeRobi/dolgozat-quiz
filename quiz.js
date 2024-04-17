var questions = [
    {
        question: "Mi a fővárosa Magyarországnak?",
        answers: {
            a: "Budapest",
            b: "Párizs",
            c: "Berlin",
            d: "London"
        },
        correctAnswer: "a"
    },
    {
        question: "Mi a legmagasabb hegy a világon?",
        answers: {
            a: "Mount Everest",
            b: "Kilimandzsáró",
            c: "Matterhorn",
            d: "Mont Blanc"
        },
        correctAnswer: "a"
    },
    {
        question: "Melyik évben fedezték fel Amerikát Kolumbusz Kristóf?",
        answers: {
            a: "1492",
            b: "1776",
            c: "1066",
            d: "1945"
        },
        correctAnswer: "a"
    }
];

function displayQuiz() {
    var quizContainer = document.getElementById('quiz');
    var output = [];

    questions.forEach(function(question, questionIndex) {
        var answers = [];

        for (var letter in question.answers) {
            answers.push(
                '<button onclick="checkAnswer(this)" data-questionIndex="' + questionIndex + '" data-answer="' + letter + '">' +
                question.answers[letter] +
                '</button>'
            );
        }

        output.push(
            '<div style="padding-top: 2rem;" class="question">' + question.question + '</div>' +
            '<div class="answers">' + answers.join('') + '</div>'
        );
    });

    quizContainer.innerHTML = output.join('');
}

function checkAnswer(button) {
    var questionIndex = button.getAttribute('data-questionIndex');
    var userAnswer = button.getAttribute('data-answer');
    var correctAnswer = questions[questionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        button.style.backgroundColor = 'lightgreen';
    } else {
        button.style.backgroundColor = 'red';
    }
}

displayQuiz();