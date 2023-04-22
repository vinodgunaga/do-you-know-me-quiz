var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Vnod",
    score: 2
  },
  {
    name: "vaibhav",
    score: 8
  }
];

var questions = [
  {
    question: "what is my work.? ",
    answer: "student"
  },
  {
    question: "what is my favorite food..? ",
    answer: "Biryani"
  }
];

function welcome() {
  var userName = readlineSync.question("Hey what is your name.? ")
  console.log("Welcome " + userName);
}

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right");
    score++;
  } else {
    console.log("You are wrong");
  }

  console.log("Your current score is " + score);
  console.log('------------------');
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("You scored: " + score);
  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  highScores.map(score => console.log((score.name + " : " + score.score)));
}

welcome()
game()
showScores()