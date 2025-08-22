/* jshint esversion: 6 */

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
}
);


function startGame() {
    
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - '.5');
    currentQuestionIndex = 0;   
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
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

function selectAnswer(e) {}
    
   const selectButton = e.target;
   const correct = selectButton.dataset.correct;
    setStatusClass(document.body, correct);
Array.from(answerButtonsElement.children).forEach(button => {
     setStatusClass(button, button.dataset.correct);
});
nextButton.classList.remove('hide');
    
   
 if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Did Newcastle have knights?',
        answers: [
            { text: 'maybe', correct: false },
            { text: 'thousands', correct: false },
            { text: 'Yes, but not many', correct: true },
            { text: 'no', correct: false }
        ]
    },

     {
        question: 'what did the Gongfarmers do in the castle?',
        answers: [
            { text: 'Clang and clong', correct: false },
            { text: 'Is that even a real job? Come on!', correct: false },
            { text: 'cleaned up the cesspits and dirty corners of of the castle', correct: true },
            { text: 'farmed for the now extinct animal, Gonglias', correct: false }
        ]
    },
       {
        question: 'What did a barber cut in medieval Newcastle?',
        answers: [
            { text: 'cut the corner', correct: false },
            { text: 'Cut the cake!', correct: false },
            { text: 'hair and also, until it was banned by decree, would help with procedures like "bleeding" on unwitting patients', correct: true },
            { text: 'barbed wire', correct: false }
        ]
    },
    {
        question: 'Is Blackfriars where they fry eggs and bacon?',
        answers: [
            { text: 'no', correct: false },
            { text: 'It is a place where the priests and friars would live and work for the church', correct: true },
            { text: 'Yes, why not?', correct: false },
            { text: 'I prefer grilled to fried food', correct: false }
        ]
    },

    {
        question: 'How old is the castle keep?',
        answers: [
            { text: 'nearly 100 years old', correct: true },
            { text: 'too old ', correct: false },
            { text: 'it was built last week', correct: false },
            { text: 'finders keepers?', correct: false }
        ]
    },

    {
        question: 'whhere did Newcastle get its name from?',
        answers: [
            { text: 'A latin name "Novum Castellum" meaning "new castle"', correct: true },
            { text: 'from a sand castle tat got washed away', correct: false },
            { text: 'some clever boffin who was bored', correct: false },
            { text: 'from a man named Norman, nice chap', correct: false }
        ]
    },
          
    {
        question: 'In medieval Newcatsle, what was sold as a high commidity?',
        answers: [
            { text: 'wool, traded and sold a lot of it ', correct: true },
            { text: 'iphones', correct: false },
            { text: 'huh?', correct: false },
            { text: 'pottery', correct: false }
        ]
    },
    
    {
        question: 'Did Newcastle have a sheriff?',
        answers: [
            { text: 'No,', correct: false },
            { text: 'Yes, and tey still do', correct: true },
            { text: 'get off your horse and drink and some milk', correct: false },
            { text: 'Oh, thats an American thing dear', correct: false }
        ]
    },   
];
// The above code was take and dapated from the following source:
// https://www.youtube.com/watch?v=riDzcEQbX6k 
// Build a Quiz App With JavaScript //