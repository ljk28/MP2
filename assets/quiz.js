/* jshint esversion: 6 */

// Quiz data code taken and adapted from:
// https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript-efe9bd8129e2
// Building an interactive quiz with HTML, CSS and JavaScript //
// by Code Picker //
//
const quizData = [
    {
      question: 'Did Newcastle have knights?',
      options: ["Maybe", "Thousands", "Yes", "No"],
      answer: "Yes"
    },
    {
      question: 'what did the Gongfarmers do in the castle?',
      options: ["'Clang and clong'", "Is that even a real job? Come on!", "cleaned up the cesspits and dirty corners of the castle", "farmed for the now extinct animal, Gonglias"],
      answer: "cleaned up the cesspits and dirty corners of the castle"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      answer: "William Shakespeare"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();


    