const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElements = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame)

const questions = [
    {
        question: 'what is 2 + 2 ?',
        answers: [
            {
                text: 4, correct: true
            },
            {
                text:24, correct: false
            }
        ]
    }
]


function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random())
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {
    questionElement.innerHTML = question.question
}

function selectAnswer() {

}
