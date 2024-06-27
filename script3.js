const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;
startButton.addEventListener('click', () => {
    console.log("Start button clicked");
    startGame();
});



function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    quizScore = 0;
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
    if (correct) {
        quizScore++;
    }
    document.getElementById('right-answers').innerText = quizScore;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'which one of these is a JavaScript framework ?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'React', correct: true },
            { text: 'Eclipse', correct: false }
        ],
    },
    {
        question: 'what does html stand for?',
        answers: [
            { text: 'Hyperlink markup language ', correct: false },
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Hyper Tool Makeup Language', correct: false }
        ],
    },
    {
        question: 'who is making the web standards ?',
        answers: [
            { text: 'Mozilla', correct: false },
            { text: 'Microsoft', correct: false },
            { text: 'The World Wide Web Consortium', correct: true },
            { text: 'Eclipse', correct: false }
        ],
    },

    {
        question: ' How can you create an e-mail link ?',
        answers: [
            { text: 'cas', correct: true },
            { text: 'Xxx@yy', correct: false },
            { text: 'csa', correct: false },
            { text: 'css', correct: false }
        ],
    },
    {
        question: 'How can you open a link in a new browser window ?',

        answers: [
            { text: 'Target', correct: false },
            { text: '_blank', correct: true },
            { text: 'same', correct: false },
            { text: 'open', correct: false }
        ],
    },
    {
        question: ' Which HTML tag is used to define an unordered list ?',

        answers: [
            { text: '<ul>', correct: true },
            { text: '<ol>', correct: false },
            { text: '<li>', correct: false },
            { text: '<list>', correct: false }
        ],
    },
    {
        question: ' Which CSS property is used to change the text color of an element?',
        answers: [
            { text: 'font-color', correct: false },
            { text: 'text-color', correct: false },
            { text: 'color', correct: true },
            { text: 'text-style', correct: false }
        ],
    },
    {
        question: 'How can you include an external CSS file in your HTML document?',

        answers: [
            { text: '<style src="style.css">', correct: false },
            { text: '<css>style.css</css>', correct: false },
            { text: '<external>style.css</external>', correct: false },
            { text: '<link rel="stylesheet" href="style.css">', correct: true }
        ],
    },
    {
        question: 'What is JavaScript primarily used for in web development?',
        answers: [
            { text: 'Styling web pages', correct: false },
            { text: 'Creating web server configurations', correct: false },
            { text: 'Adding interactivity to web pages', correct: true },
            { text: 'Defining the structure of web pages', correct: false }
        ],
    },
    {
        question: ' What does the "typeof" operator in JavaScript return?',
        answers: [
            { text: 'The data type of a variable or expression', correct: true },
            { text: 'The value of a variable', correct: false },
            { text: 'The length of a string', correct: false },
            { text: 'The type of function being executed', correct: false }
        ],
    },
    {
        question: 'Which JavaScript method is used to add new items to the end of an array and return the new length ?',
        answers: [
            { text: 'push()', correct: true },
            { text: 'add()', correct: false },
            { text: 'insert()', correct: false },
            { text: 'append()', correct: false }
        ],
    },
];
