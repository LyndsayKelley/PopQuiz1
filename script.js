var numberEle = document.body.querySelector(".number");
var inputEle = document.body.querySelector(".input");
var answerEle = document.body.querySelector(".answer");

var number = 5

var input = Number(prompt("Enter a number"));

var answer = number+input
if(answer<10){
  var input = Number(prompt("Enter a number"));

  var answer2 = answer+input
  }
if(answer>10){
  document.body.querySelector(".end").innerHTML = "Program has ended";
}
 
document.body.querySelector(".answer").innerHTML = answer;