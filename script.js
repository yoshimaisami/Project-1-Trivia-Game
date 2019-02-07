const challenges = [
  {
    question:
      "https://image.freepik.com/free-vector/cute-dog-breeds_23-2147519661.jpg",
    option: ["Dog", "Cat"],
    correctAnswer: "Dog"
  },

  {
    question:
      "https://image.freepik.com/free-vector/beautiful-frog-emoticons-set_23-2147592374.jpg",
    option: ["Frog", "Bird"],
    correctAnswer: "Frog"
  },

  {
    question:
      "https://image.freepik.com/free-vector/flat-easter-bunny-collection_23-2147752672.jpg",
    option: ["Horse", "Bunny"],
    correctAnswer: "Bunny"
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
initialGamestate(0);

function initialGameState(gameLevel) {
  imageSwapper.src = challenges[gameLevel].question;
  option1Swapper.innerHTML = challenges[gameLevel].option[0];
  option2Swapper.innerHTML = challenges[gameLevel].option[1];
}

option1Swapper.addEventListener("click", function() {
  // option1Swapper.innerHTML = challenges[2].option[0];
  answer = option1Swapper.innerHTML;
  console.log(challenges[0].correctAnswer === answer);
  initialGameState(1);
});

option2Swapper.addEventListener("click", function() {
  // option2Swapper.innerHTML = challenges[2].option[1];
  answer = option2Swapper.innerHTML;
  console.log(challenges[0].correctAnswer === answer);
  initialGameState(1);
});

option1Swapper.addEventListener("click", function() {
  // option1Swapper.innerHTML = challenges[2].option[0];
  answer = option1Swapper.innerHTML;
  console.log(challenges[1].correctAnswer === answer);
  initialGameState(2);
});

option2Swapper.addEventListener("click", function() {
  // option2Swapper.innerHTML = challenges[2].option[1];
  answer = option2Swapper.innerHTML;
  console.log(challenges[1].correctAnswer === answer);
  initialGameState(2);
});

initialGameState();

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

// Notes:
// need to display "question" image in question div
// display corresponding options beneath the question image
// user should be able to "click" on options
// system will check for correctAnswer
// if correct, show congrats msg (bonus: play matching animal sound "woof-woof")
// if wrong, show try again msg (bonus: play whoopsi)

// Questions:
// should I split the options array up, and have two seperate keys...correctAnswer & incorrectAnswer...might make it easier for validation.
