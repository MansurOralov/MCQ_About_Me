var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
//this sends the request
xhr.send();
//when readystate changes

var question;
var correct = 0;
var incorrect = 0;
let i = 0;
var answers = [];
var name = 0;

xhr.onload = function(){
    if(xhr.status === 200){
        question = JSON.parse(xhr.responseText);
      
    }
    document.getElementById("question").innerHTML =  question.questions[i].question;
    document.getElementById("answer#1").innerHTML =  question.questions[i].correct;
    document.getElementById("answer#2").innerHTML =  question.questions[i].answer2;
    document.getElementById("answer#3").innerHTML =  question.questions[i].answer3;
    document.getElementById("answer#4").innerHTML =  question.questions[i].answer4;    
}

function checkAnswer(){
    var correctAnswer =  question.questions[i].correct;
    var userAnswer;
  if(document.getElementById("answer1").checked){
      userAnswer = document.getElementById("answer#1").innerHTML;
      
  }
  else if(document.getElementById("answer2").checked){
    userAnswer = document.getElementById("answer#2").innerHTML;
    }
    else if(document.getElementById("answer3").checked){
        userAnswer = document.getElementById("answer#3").innerHTML;
        }
        else if(document.getElementById("answer4").checked){
            userAnswer = document.getElementById("answer#4").innerHTML;
            }
    if(userAnswer === correctAnswer){
        alert("Correct!");
        correct++;
        
    }
    else{
        alert("Incorrect!");
        incorrect++;
       
    }
i++;
console.log(i);
answers[0] = question.questions[i].correct;
answers[1] = question.questions[i].answer2;
answers[2] = question.questions[i].answer3;
answers[3] = question.questions[i].answer4;
shuffle(answers);
document.getElementById("question").innerHTML =  question.questions[i].question;
document.getElementById("answer#1").innerHTML =  answers[0];
document.getElementById("answer#2").innerHTML =  answers[1];
document.getElementById("answer#3").innerHTML =  answers[2];
document.getElementById("answer#4").innerHTML =  answers[3];

localStorage.setItem('correctAnswers', correct);
localStorage.setItem('incorrectAnswers', incorrect);
uncheckAll();

if(i == 10){
    window.location.href= "result.html";
}

}


function uncheck1(){
    if(document.getElementById("answer1").checked){
        document.getElementById("answer2").checked = false;
        document.getElementById("answer3").checked = false;
        document.getElementById("answer4").checked = false; 
    }
}

function uncheck2(){
    if(document.getElementById("answer2").checked){
        document.getElementById("answer1").checked = false;
        document.getElementById("answer3").checked = false;
        document.getElementById("answer4").checked = false; 
}
}

function uncheck3(){
    if(document.getElementById("answer3").checked){
        document.getElementById("answer1").checked = false;
        document.getElementById("answer2").checked = false;
        document.getElementById("answer4").checked = false; 
    }
}

function uncheck4(){
    if(document.getElementById("answer4").checked){
        document.getElementById("answer1").checked = false;
        document.getElementById("answer2").checked = false;
        document.getElementById("answer3").checked = false; 
    }
}

function question(){
    document.getElementById("question").innerHTML =  question.questions[i].question;
    document.getElementById("answer#1").innerHTML =  question.questions[i].correct;
    document.getElementById("answer#2").innerHTML =  question.questions[i].answer2;
    document.getElementById("answer#3").innerHTML =  question.questions[i].answer3;
    document.getElementById("answer#4").innerHTML =  question.questions[i].answer4;    
}

function shuffle(array) {
    for(let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  }

  function uncheckAll(){
    document.getElementById("answer3").checked = false;
    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer4").checked = false; 
  }


  function displayResults(){
      document.getElementById("correct").innerHTML = `Corect answers: ${localStorage.getItem("correctAnswers")}`;
      document.getElementById("incorrect").innerHTML = `Incorrect answers: ${localStorage.getItem("incorrectAnswers")}`;
      document.getElementById("name").innerHTML = `${localStorage.getItem("userName")}'s score:`;
  }


   function redirect(){
    name = document.getElementById("input").value;
    localStorage.setItem('userName', name);
    window.location.href= "index.html";
   }

