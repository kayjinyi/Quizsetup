timeLeft = 60;
var timerEl = document.querySelector("#timer");
var timeInterval;
function timerStart() {
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " second remaining"; // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      // displayMessage();
    }
  }, 1000);
}

var questions = [
  {
    ques: "Commonly used data types DO NOT include__",
    answ: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
    },
    answer: "alerts",
  },
  {
    ques: "Which of the following code creates an object?",
    answ: {
      a: "var book = Object();",
      b: "var book = new Object();",
      c: "var book = new OBJECT();",
      d: "var book = new Book();",
    },
    answer: "var book = new Object();",
  },
  {
    ques: "The condition in an if /else statement is enclosed within__",
    answ: {
      a: "quotes",
      b: "curly brakets",
      c: "parentheses",
      d: "square braket",
    },
    answer: "parentheses",
  },
];
var qNum = 0;
console.log("linked");
var startQuestion = document.querySelector("#startQ");
console.log(startQuestion);
startQuestion.addEventListener("click", function (event) {
  event.preventDefault();
  //console.log(event);
  timerStart();
  document.querySelector("#startDiv").classList.add("invisible");
  document.querySelector("#questionDiv").classList.remove("invisible");
  showAnswer();
});

function showAnswer() {
  document.querySelector("#questionP").textContent = questions[qNum].ques;
  document.querySelector("#answer1").textContent = questions[qNum].answ.a;
  document.querySelector("#answer2").textContent = questions[qNum].answ.b;
  document.querySelector("#answer3").textContent = questions[qNum].answ.c;
  document.querySelector("#answer4").textContent = questions[qNum].answ.d;
  answer1.addEventListener("click", buttonClicked);
  answer2.addEventListener("click", buttonClicked);
  answer3.addEventListener("click", buttonClicked);
  answer4.addEventListener("click", buttonClicked);
  //do the rest of answers
}

function buttonClicked(event) {
  console.log(event.target.textContent);
  if (event.target.textContent === questions[qNum].answer) {
    document.querySelector("#winOrlose").textContent = "You win";
  } else {
    document.querySelector("#winOrlose").textContent = "You lose";
    timeLeft -= 10;
  }
  //check if answer is correct --- event.target.textContent compare with questions[qNum].answer
  //if wrong subtract from the time
  qNum++;
  if (qNum >= questions.length) {
    gameOver();
  } else {
    showAnswer();
  }
  //if quiz is over do gameover
}

function gameOver() {
  clearInterval(timeInterval);
  alert("game Over!");
  document.querySelector("#questionDiv").classList.add("invisible");
  document.querySelector("#gameOver").classList.remove("invisible");
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var initals = document.querySelector("#initial").value;
  localStorage.setItem("Highscore", initals + timeLeft);
});
