const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');



startButton.addEventListener('click', startGame);


function startGame() {
    
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}
function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(document.querySelectorAll('.btn')).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (questions.length > currentQuestionIndex + 1) {
        document.getElementById('next-button').classList.remove('hide');
    } else {
        document.getElementById('start-button').innerText = 'Restart';
        document.getElementById('start-button').classList.remove('hide');
    }
}