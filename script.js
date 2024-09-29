var quiz = [
  {
    ques: "In one word, if it is enclosed in quotation marks, what is it?",
    ans: "string"
  },
  {
    ques: "What is the keyword that declares a variable?",
    ans: "var"
  },
  {
    ques: "Type the operator that means and.",
    ans: "&&"
  },
  {
    ques: "Type the operator that means or.",
    ans: "||"
  },
  {
    ques: "What is a variable that represents a list of values? Answer with one word.",
    ans: "array"
  },
  {
    ques: "In an array, the numbering starts with?",
    ans: "0"
  },
  {
    ques: "What keyword removes the last element from an array?",
    ans: "pop"
  },
  {
    ques: "What keyword adds one or more elements to the end of an array?",
    ans: "push"
  },
  {
    ques: "What keyword removes the first element of an array?",
    ans: "shift"
  },
  {
    ques: "What keyword adds one or more elements to the beginning of an array?",
    ans: "unshift"
  },
];

function startQuiz() {
  var score = 0;
  for (var i = 0; i < quiz.length; i++) {
    var useranswer = prompt(quiz[i].ques);
    if (useranswer === quiz[i].ans) {
      alert("Correct");
      score++;
    } else {
      alert("Wrong! The correct answer is " + quiz[i].ans);
    }
  }
  alert("Quiz finished! Your score is: " + score + " out of " + quiz.length);
}

startQuiz();