const challenges = [
  {
    question:
      "https://image.freepik.com/free-vector/cute-dog-breeds_23-2147519661.jpg",
    option: ["dog", "cat"],
    correctAnswer: "dog"
  },

  {
    question:
      "https://image.freepik.com/free-vector/beautiful-frog-emoticons-set_23-2147592374.jpg",
    option: ["frog", "bird"],
    correctAnswer: "frog"
  },

  {
    question:
      "https://image.freepik.com/free-vector/flat-easter-bunny-collection_23-2147752672.jpg",
    option: ["bunny", "horse"],
    correctAnswer: "bunny"
  },

  {
    question:
      "https://image.freepik.com/free-vector/funny-monkey-cartoons_1042-160.jpg",
    option: ["monkey", "mouse"],
    correctAnswer: "monkey"
  }
];

let imageSwapper = document.querySelector(".questionImage");
let option1Swapper = document.querySelector(".optionOne");
let option2Swapper = document.querySelector(".optionTwo");
var answer = "";

//need initial game state, with initial image/question and options (1 & 2)
//need a way to swap images(questions) that are displayed
// imageSwapper.src = challenges[0].question;

//need a way to swap out options (potential answers)
// option1Swapper.innerHTML = "Bunny";

//need a way to swap out options (potential answers)
// option2Swapper.innerHTML = "Cat";

//event listeners
//initialGamestate(0);

//function check if the answer's correct
//IF it's right, iterate
//create function that pulls next question

gameLevel = 0;

function initialGameState() {
  imageSwapper.src = challenges[gameLevel].question;
  option1Swapper.innerHTML = challenges[gameLevel].option[0];
  option2Swapper.innerHTML = challenges[gameLevel].option[1];
}

option1Swapper.addEventListener("click", nextLevel);
option2Swapper.addEventListener("click", nextLevel);

function nextLevel() {
  answer = option1Swapper.innerHTML;
  console.log(answer);
  if (answer === challenges[gameLevel].correctAnswer) {
    // alert("congrats");
    gameLevel++;
    initialGameState();
  }
}

initialGameState();

// Notes:
// need to display "question" image in question div
// display corresponding options beneath the question image
// user should be able to "click" on options
// system will check for correctAnswer
// if correct, show congrats msg (bonus: play matching animal sound "woof-woof")
// if wrong, show try again msg (bonus: play whoopsi)

// Questions:
// should I split the options array up, and have two seperate keys...correctAnswer & incorrectAnswer...might make it easier for validation.

//Misc:
// document.getElementById("myBtn").addEventListener("click", function () {
//   alert("Hello World!");

// var imageSwapper = (document.querySelector(".questionImage").src =
//   "https://image.freepik.com/free-vector/beautiful-frog-emoticons-set_23-2147592374.jpg");

// var quesImg = document.querySelector(".questionImage");
// quesImg.src =
//   "https://image.freepik.com/free-vector/cute-dog-breeds_23-2147519661.jpg";

// console.log(quesImg);

// // optionName.innerText = "Hello";
// console.log(optionName.innerHTML);

// let picture = document.getElementsByClassName("question");

// picture.innerHTML = "Hello";

// console.log(picture);

//var imageReplacement = (document.getElementsByTagName("img");

//var setImage = (imageReplacement = challenges[0].question);

//challenges[0].question);

//var imageReplacement = document.getElementsByTagName("img");
//var setImage = (imageReplacement = challenges[0].question);
//challenges[0].option[0]; //dog
//challenges[0].option[1]; //cat
