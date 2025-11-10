/* jshint esversion: 6 */

const startButton = document.getElementById('start');





startButton.addEventListener('click', page2.html);



const questions = [{
        question: 'Did Newcastle have knights?',
        answers: [{
                text: 'maybe',
                correct: false
            },
            {
                text: 'thousands',
                correct: false
            },
            {
                text: 'Yes, but not many',
                correct: true
            },
            {
                text: 'no',
                correct: false
            }
        ]
    },

    {
        question: 'what did the Gongfarmers do in the castle?',
        answers: [{
                text: 'Clang and clong',
                correct: false
            },
            {
                text: 'Is that even a real job? Come on!',
                correct: false
            },
            {
                text: 'cleaned up the cesspits and dirty corners of of the castle',
                correct: true
            },
            {
                text: 'farmed for the now extinct animal, Gonglias',
                correct: false
            }
        ]
    },
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

