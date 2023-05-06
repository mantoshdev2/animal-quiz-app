var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Mantosh",
    score: 8,
  },

  {
    name: "Mukesh",
    score: 6,
  },
]

// array of objects
var questions = [{
  question: "What is the name of the only mammal that can fly?",
  answer: "Bat"
}, {
  question: "What is the name of the smallest bird in the world?",
  answer: "Bee Hummingbird"
},
{
  question: "What is the name of the slowest animal in the world?",
  answer: "Sloth"
},
{
  question: "What is the name of the largest reptile in the world?",
  answer: "Saltwater Crocodile"
},
{
  question: "What is the name of the fastest marine animal?",
  answer: " Sailfish"
},
{
  question: "What is the name of the largest species of penguin?",
  answer: "Emperor Penguin"
},
{
  question: "Which animal is known as the ship of the desert ?",
  answer: "Camel"
},
{
  question: "What is the name for a group of kangaroos?",
  answer: "A mob"
},
{
  question: "Which species of bear is native to North America?",
  answer: " Grizzly bear"
},
{
  question: "How many hearts does an octopus have?",
  answer: "Three"
}];


function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " let's see if you know enough about animals ");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


