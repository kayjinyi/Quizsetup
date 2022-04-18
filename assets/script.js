timeLeft =50
var timerEl = document.querySelector('#timer')
var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' second remaining';// Decrement `timeLeft` by 1
      timeLeft--;
    }  else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      // displayMessage();
    }
  }, 1000);

  var questions = [
    {q: "Commonly used data types DO NOT include__",
    ans: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
    },
    answer: "alerts",
    },
    {q: "Which of the following code creates an object?",
    ans: {
        a: "var book = Object();",
        b: "var book = new Object();",
        c: "var book = new OBJECT();",
        d: "var book = new Book();",
    },
    answer: "var book = new Object();",
    },
    {q: "The condition in an if /else statement is enclosed within__",
    ans: {
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
var startQuestion = document.querySelector("#startQ")
console.log(startQuestion);
startQuestion.addEventListener("click",function(event){
    event.preventDefault();
    //console.log(event);
    
    document.querySelector("#startDiv").classList.add("invisible");
    document.querySelector("#questionDiv").classList.remove("invisible");
    showAnswer()

})

function showAnswer(){
  document.querySelector("#questionP").textContent= questions[qNum].q;
  var answer1 = document.querySelector("#answer1")
  answer1.textContent = questions[qNum].ans.a
  answer1.addEventListener("click", buttonClicked)
  //do the rest of answers
}

function buttonClicked(event){
  console.log(event.target.textContent)
  //check if answer is correct --- event.target.textContent compare with questions[qNum].answer
  //if wrong subtract from the time
  qNum++
  //if quiz is over do gameover
  showAnswer()
}