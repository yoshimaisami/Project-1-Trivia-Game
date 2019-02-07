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
    options: ["Frog", "Bird"],
    correctAnswer: "Frog"
  },

  {
    question:
      "https://image.freepik.com/free-vector/flat-easter-bunny-collection_23-2147752672.jpg", //insertImage3bunny,
    options: ["Bunny", "Horse"],
    correctAnswer: "Bunny"
  }
];

var imageSwapper = document.querySelector(".questionImage");
imageSwapper.src =
  "https://image.freepik.com/free-vector/flat-easter-bunny-collection_23-2147752672.jpg";

// var quesImg = document.querySelector(".questionImage");
// quesImg.src =
//   "https://image.freepik.com/free-vector/cute-dog-breeds_23-2147519661.jpg";

// console.log(quesImg);

// // optionName.innerText = "Hello";
// console.log(optionName.innerHTML);

// let picture = document.getElementsByClassName("question");

// picture.innerHTML = "Hello";

// console.log(picture);

// .src =
//   "https://image.freepik.com/free-vector/cute-dog-breeds_23-2147519661.jpg");

// picture.innerHTML = "hi";

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
