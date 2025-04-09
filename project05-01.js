"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Isiah Reyes
      Date:   04-09-25

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;
// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

startQuiz.onclick = function() {
   overlay.className = "showquiz";
   timeID = window.setInterval(countdown, 1000);
}

function countdown() {
   if (timeLeft==0){
      clearInterval(timeID)
      let totalCorrect = checkAnswers()

      if (totalCorrect==correctAnswers.length)
      {
         window.alert("Congratulations on getting 100%")
             
      }
      else {
         timeLeft = quizTime 
         quizClock.value = timeLeft
         overlay.className = "hidequiz"
         window.alert("You answered correctly " + totalCorrect+ "out of "+correctAnswers.length+ "questions")

      }
   }
   else (timeLeft != 0);{
      timeLeft--;
      quizClock.value = timeLeft
   }
   
}




/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

