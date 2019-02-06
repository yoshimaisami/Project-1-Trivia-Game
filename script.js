const questions = [
  {
    challenge: 0,
    question:
      "https://image.freepik.com/free-vector/cute-dog-breeds_23-2147519661.jpg", //insertImage1dog,
    option: ["Dog", "Cat"],
    // option: [{
    //     en: 'Dog',
    //     sp: 'Perro'
    // },
    // {
    //     en:'Cat',
    //     sp: 'Gato'
    // }
    // ],
    correctAnswer: "Dog"
    // correctAnswerIndex: 0
  },

  {
    challenge: 1,
    question:
      "https://www.freepik.com/free-vector/beautiful-frog-emoticons-set_1020311.htm", //insertImagefrog,
    options: ["Frog", "Bird"],
    correctAnswer: "Frog"
  },

  {
    challenge: 2,
    question:
      "https://image.freepik.com/free-vector/flat-easter-bunny-collection_23-2147752672.jpg", //insertImage3bunny,
    options: ["Bunny", "Horse"],
    correctAnswer: "Bunny"
  }
];

/* Notes: 
need to display "question" image in question div
display corresponding options beneath the question image
user should be able to "click" on options
system will check for correctAnswer
if correct, show congrats msg (bonus: play matching animal sound "woof-woof")
if wrong, show try again msg (bonus: play whoopsi)

Questions:
should I split the options array up, and have two seperate keys...correctAnswer & incorrectAnswer...might make it easier for validation.


*/
