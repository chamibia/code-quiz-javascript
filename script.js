//create array with questions and answers 
var myQuestions = [
    { 
        questions: "Commonly used data types DO NOT include: ",  
        answers: ['a: strings', 'b: booleans',  'c: number', 'd: numbers'], 
        correctAnswer: 'b: booleans'
    }, 

    {
        questions: "Arrays in JavaScript can be used to store ________.", 
        answers: ['a: numbers and strings', 'b: other arrays', 'c: booleans', 'd: all of the above'], 
        correctAnswer: 'd: all of the above'
    }, 
    {
       questions: "String values must be enclosed within ______ when being assigned to variables.", 
       answers: ['a: commas', 'b: curly brackets', 'c: quotes', 'd: parenthesis'],  
       correctAnswer: 'b: curly brackets'
    }, 
    {
        questions: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: [ 'a: JavaScript', 'b: Terminal/bash', 'c: for loops', 'd: console.log'], 
        correctAnswer: 'd: console.log'
    }
];


//select all global variables 
var timer = document.getElementById("time");
var score = document.getElementById("score");
var mainContent = document.getElementById("mainContainer")
var questionIntro = document.getElementById("question");
var choices = document.getElementById("choices");
var instructions = document.getElementsByClassName("instructions");
var startButton = document.querySelector("#start-button"); 
var results = document.getElementById("results");
var score = 0; 

startButton.addEventListener("click", start); 



function start() {

    //startButton.setAttribute("class", "hidden"); 

    setTime();

    isQuestionOne();

}
function isQuestionOne() {
    questionIntro.innerHTML = "";
    instructions.innerHTML = "";

    var questionEl = document.createElement("h1"); 
    questionEl.setAttribute("id", "theQuest");
    questionIntro.appendChild(questionEl);
    document.getElementById("theQuest").textContent = myQuestions[0].questions;

    //old 
    // questionEl.textContent = myQuestions.questions[0]; 
    // questionEl.className = "theQuest"; 
    // questionIntro.append(questionEl.innerHTML);

    for(var i=0; i < myQuestions[0].answers.length; i++) {
        var cEle = document.createElement("li");
        cEle.setAttribute("id", myQuestions[3].answers[i]); 
        choices.appendChild(cEle); 
        cEle.append(myQuestions[3].answers[i]);
        // choices.append(answers);
        
        
        // var cEle = document.createElement("li");
        // choices.setAttribute("id", myQuestions[0].answers[i]); 
        // document.body.appendChild(choices); 
        // choices.textContent = myQuestions[0].answers[i];
        // choices.append(myQuestions[0].answers[i]); 

    }

    choices.addEventListener("click", function (event) {
        if (event.target.id === myQuestions[0].correctAnswer) {
            results.textContent = "correct"; 
            score += 10; 
        } else {
            results.textContent = "incorrect";
        }
        isQuestionTwo (); 
    }); 
}

//create second question and choices 
function isQuestionTwo() {
    questionIntro.innerHTML = ""; 
    choices.innerHTML = ""; 

    var questionEl = document.createElement("h1");
    questionEl.textContent = myQuestions[1].questions;
    questionEl.className = "myQuest";
    questionIntro.append(questionEl);

    for(var i=0; i < myQuestions[1].answers.length; i++) {
        var cEle = document.createElement("li");
        cEle.setAttribute("id", myQuestions[3].answers[i]); 
        choices.appendChild(cEle); 
        cEle.append(myQuestions[3].answers[i]);
        // choices.append(answers);
    }
    choices.addEventListener("click", function(event) {
        if (event.target.id === myQuestions[1].correctAnswer) {
            console.log("correct");
            score += 20;  
        }else {
            console.log("incorrect"); 
        }
        isQuestionThree (); 
        }); 
}
//create third question and choices 
function isQuestionThree() {
    questionIntro.innerHTML = ""; 
    choices.innerHTML = ""; 

    var questionEl = document.createElement("h1"); 
    questionEl.textContent = myQuestions[2].questions; 
    questionEl.className = "myQuest"; 
    questionIntro.append(questionEl); 

    for (var i=0; i < myQuestions[2].answers.length; i++) {
        var cEle = document.createElement("li");
        cEle.setAttribute("id", myQuestions[2].answers[i]); 
        choices.appendChild(cEle); 
        cEle.append(myQuestions[3].answers[i]);
        // choices.append(answers);

    }
    choices.addEventListener("click", function (event) {
        if(event.target.id === myQuestions[2].correctAnswer) {
            console.log("correct");
            score += 30; 
        }else {
            console.log("incorrect");
        }
        isQuestionFour ();
        }); 
}

//create fourth question and choices
function isQuestionFour () {
    questionIntro.innerHTML = "";
    choices.innerHTML = "";

    var questionEl = document.createElement("h1");
    questionEl.textContent = myQuestions[3].questions; 
    questionEl.className = "myQuest";
    questionIntro.append(questionEl);

    for(var i=0; i < myQuestions[3].answers.length; i++) {
        var cEle = document.createElement("li");
        cEle.setAttribute("id", myQuestions[3].answers[i]); 
        choices.appendChild(cEle); 
        cEle.append(myQuestions[3].answers[i]);
        // choices.append(answers);
    }
    choices.addEventListener("click", function (event) {
        if(event.target.id === myQuestions[3].correctAnswer) {
            console.log("correct");
            score += 40; 
        }else {
            console.log("incorrect"); 
        }
        endGame();
    });
}

function endGame() {
    //clears previous page content
    questionIntro.innerHTML = "";
    choices.innerHTML = "";

    var questionEl = document.createElement("h1");
    questionEl.textContent = "Quiz Completed!";
    questionEl.className = "myQuest"; 
    questionIntro.append(questionEl);

    var final = document.createElement("p");
    final.setAttribute("id", "final-score"); 
    final.textContent = "Your final score is ______."; 
    choices.append(final); 

    console.log("Quiz complete!"); 
}

function setTime() {
}
var counter = 50; 
var countdown = setInterval (function () {
    counter--; 
    if(counter === -1) {
        clearInterval(countdown); 
    }
    //timer.textContent = counter; 
}, 1000); 
  