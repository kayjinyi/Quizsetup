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
    {q: "Which of the following type of variable is visible only within a function where it is defined?",
    ans: {
        a: "1. global variable",
        b: "2. local variable",
        c: "3. Both of the above",
        d: "4. None of the above",
    },
    answer: "2. local variable",
    },
    {q: "Which of the following code creates an object?",
    ans: {
        a: "1. var book = Object();",
        b: "2. var book = new Object();",
        c: "3. var book = new OBJECT();",
        d: "4. var book = new Book();",
    },
    answer: "2. var book = new Object();",
    },
    {q: "Which of the following function of String object returns the calling string value converted to upper case?",
    ans: {
        a: "1. toLocaleUpperCase()",
        b: "2. toUpperCase()",
        c: "3. toString()",
        d: "4. substring()",
    },
    answer: "2. toUpperCase()",
    },
    {q: "Which of the following function of Array object joins all elements of an array into a string?",
    ans: {
        a: "1. concat()",
        b: "2. join()",
        c: "3. pop()",
        d: "4. map()",
    },
    answer: "2. join()",
    },
    {q: "Which of the following function of Array object returns a string representing the array and its elements?",
    ans: {
        a: "1. toSource()",
        b: "2. sort()",
        c: "3. splice()",
        d: "4. toString()",
    },
    answer: "4. toString()",
    }
];
var qNum = 0

console.log("linked");
var startQuestion = document.querySelector("#startQ")
console.log(startQuestion);
// var Questions = {
//     question:["Commonly used data types DO NOT include__", "The condition in an if /else statement is enclosed within__"],
//     answers:[[["strings"],["booleans"],["alerts"],["numbers"]],[[["quotes"],["curly brakets"],["parentheses"],[square bre]]]
// }
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