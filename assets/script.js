timeLeft =1000
var timerEl = document.querySelector('$timer')
var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft +// Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
body{
    
}

console.log("linked");
var startQuestion = document.querySelector("#startQ")
console.log(startQuestion);
var Questions = {
    question:["Commonly used data types DO NOT include__", "The condition in an if /else statement is enclosed within__"],
    answers:[[["strings"],["booleans"],["alerts"],["numbers"]],[[["quotes"],["curly brakets"],["parentheses"],[square bre]]]
}
startQuestion.addEventListener("click",function(event){
    event.preventDefault();
    console.log(event);
    document.querySelector("#questionP").textContent= Questions[0];
})