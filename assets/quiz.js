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


    {
        question: 'What did a barber cut in medieval Newcastle?',
        answers: [{
                text: 'cut the corner',
                correct: false
            },
            {
                text: 'Cut the cake!',
                correct: false
            },
            {
                text: 'hair and also, until it was banned by decree, would help with procedures like "bleeding" on unwitting patients',
                correct: true
            },
            {
                text: 'barbed wire',
                correct: false
            }
        ]
    },
    {
        question: 'Is Blackfriars where they fry eggs and bacon?',
        answers: [{
                text: 'no',
                correct: false
            },
            {
                text: 'It is a place where the priests and friars would live and work for the church',
                correct: true
            },
            {
                text: 'Yes, why not?',
                correct: false
            },
            {
                text: 'I prefer grilled to fried food',
                correct: false
            }
        ]
    },

    {
        question: 'How old is the castle keep?',
        answers: [{
                text: 'nearly 100 years old',
                correct: true
            },
            {
                text: 'too old ',
                correct: false
            },
            {
                text: 'it was built last week',
                correct: false
            },
            {
                text: 'finders keepers?',
                correct: false
            }
        ]
    },

    {
        question: 'whhere did Newcastle get its name from?',
        answers: [{
                text: 'A latin name "Novum Castellum" meaning "new castle"',
                correct: true
            },
            {
                text: 'from a sand castle tat got washed away',
                correct: false
            },
            {
                text: 'some clever boffin who was bored',
                correct: false
            },
            {
                text: 'from a man named Norman, nice chap',
                correct: false
            }
        ]
    },

    {
        question: 'In medieval Newcatsle, what was sold as a high commidity?',
        answers: [{
                text: 'wool, traded and sold a lot of it ',
                correct: true
            },
            {
                text: 'iphones',
                correct: false
            },
            {
                text: 'huh?',
                correct: false
            },
            {
                text: 'pottery',
                correct: false
            }
        ]
    },

    {
        question: 'Did Newcastle have a sheriff?',
        answers: [{
                text: 'No,',
                correct: false
            },
            {
                text: 'Yes, and they still do',
                correct: true
            },
            {
                text: 'get off your horse and drink and some milk',
                correct: false
            },
            {
                text: 'Oh, thats an American thing dear',
                correct: false
            }
        ]
    },
];


// The above code was taken and adapted from the following source:
// https://www.youtube.com/watch?v=riDzcEQbX6k 
// Build a Quiz App With JavaScript //
// by Web Dev Simplified //
// https://github.com/WebDevSimplified/JavaScript-Quiz-App //

