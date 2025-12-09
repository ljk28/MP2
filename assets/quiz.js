/* jshint esversion: 6 */

// Quiz data code taken and adapted from:
// https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript-efe9bd8129e2
// Building an interactive quiz with HTML, CSS and JavaScript //
// by Code Picker //


const quizData = [
    {
      question: "Did Newcastle have knights?",
      options: ["Maybe", "Thousands", "Yes", "No, only nights and days"],
      answer: "Yes"
    },
    {
      question: "What did the Gongfarmers do in the castle?",
      options: ["Clang and clong", "Is that even a real job? Come on!", "Cleaned up the cesspits and dirty corners of the castle", "Farmed for the now extinct animal, Gonglias"],
      answer: "Cleaned up the cesspits and dirty corners of the castle"
    },
    {
      question: "What did a barber cut in medieval Newcastle?",
      options: ["Cut the corner", "Cut the cake", "Hair and also, until it was banned by decree, would help with procedures like bleeding on unwitting patients", "Barbed wire"],
      answer: "Hair and also, until it was banned by decree, would help with procedures like bleeding on unwitting patients"
    },
    {
      question: "Is Blackfriars where they fry eggs and bacon?",
      options: ["No", "It is a place where the priests and friars would live and work for the church", "Yes, I've seen their frying pan collection", "I prefer grilled to fried food"],
      answer: "It is a place where the priests and friars would live and work for the church"
    },
    {
      question: "How old is the castle keep?",
      options: ["Too old!", "It was built last week", "Around 100 years old", "Finders keepers?"],
      answer: "Around 100 years old"
    },
    {
        question: "Where did Newcastle get its name from?",
        options: ["A latin name Novum Castellum meaning new castle", "From a sand castle that got washed away", "Some clever boffin who was bored", "From a man named Norman, nice chap"],
        answer: "A latin name Novum Castellum meaning new castle"
    },
    {
        question: "In medieval Newcastle, what was sold as a high commodity?",
        options: ["Wool, traded and sold a lot of it", "Iphones", "Pottery", "Computer Chips"],
        answer: "Wool, traded and sold a lot of it"
    },
    {
        question: "Did Newcastle have a sheriff?",
        options: ["No", "Yes, they still do", "Get off your horse and drink and some milk", "Wrong country, that's only in America"],
        answer: "Yes, they still do"
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
      <div id="score-container">
      <p id="score">Your score ${score}/${quizData.length}</p>
      
    `;
  
  }
  
  showQuestion();



// End of code taken and adapted from:
// https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript-efe9bd8129e2
// Building an interactive quiz with HTML, CSS and JavaScript //
// by Code Picker //

// the following code for the restart button is taken and adapted from: geekforgeeks.org
// https://www.geeksforgeeks.org/how-to-add-restart-button-in-javascript-quiz-app/
// How to add Restart Button in JavaScript Quiz App
// By GeeksforGeeks
// And also from:
// Restart button code taken and adapted from Emmet suggestions and:
// https://www.youtube.com/watch?v=zZRX51xcIAg
// "Building an Interactive Quiz App with JavaScript"
// By 
// Netcreed
//
  const restartBtn = document.getElementById("Restart Quiz");
  restartBtn.addEventListener("click", restartButton);    
 function restartButton() {
    const scoreContainer = document.getElementById("score-container");
    if (restartButton.clicked = true) {
      scoreContainer.style.display = "none";
      currentQuestion = 0;
      score = 0;
      showQuestion(); 
    }
  }


  $(document).ready(function(){
  $("button").click(function(){
    $("#scroll").fadeToggle("slow");
  });
});
  
