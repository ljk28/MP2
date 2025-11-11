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
      question: "What did a barber cut in medieval Newcastle?",
      options: ["Cut the corner", "Cut the cake", "hair and also, until it was banned by decree, would help with procedures like bleeding on unwitting patients", "barbed wire"],
      answer: "William Shakespeare"
    },
    {
      question: "'Is Blackfriars where they fry eggs and bacon?",
      options: ["no", "it is a place where the priests and friars would live and work for the church", "yes, why not?", "I prefer grilled to fried food"],
      answer: "it is a place where the priests and friars would live and work for the church"
    },
    {
      question: "How old is the castle keep?",
      options: ["too old!", "it was built last week", "around 100 years old", "finders keepers?"],
      answer: "around 100 years old"
    },
    {
        question: "where did Newcastle get its name from?",
        options: ["A latin name Novum Castellum meaning new castle", "from a sand castle that got washed away", "some clever boffin who was bored", "from a man named Norman, nice chap"],
        answer: "A latin name Novum Castellum meaning new castle"
    },
    {
        question: "In medieval Newcastle, what was sold as a high commidity?",
        options: ["wool, traded and sold a lot of it", "iphones", "pottery", "computer chips"],
        answer: "River Tyne"
    },
    {
        question: "Did Newcastle have a sheriff?",
        options: ["No", "yes, they still do", "Get off your horse and drink and some milk", "wrong country, that's only in America"],
        answer: "yes, they still do"
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

// End of code taken and adapted from:
// https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript-efe9bd8129e2
// Building an interactive quiz with HTML, CSS and JavaScript //
// by Code Picker //