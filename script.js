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
            console.log("correct"); 
        } else {
            console.log("incorrect"); 
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

    for(var i=0; i <myQuestions[2].answers.length; i++) {
        var cEle = document.createElement("li");
        cEle.setAttribute("id", myQuestions[2].answers[i]); 
        choices.appendChild(cEle); 
        cEle.append(myQuestions[3].answers[i]);
        // choices.append(answers);

    }
    choices.addEventListener("click", function (event) {
        if(event.target.id === myQuestions[2].correctAnswer) {
            console.log("correct");
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
  




//var start = document.getElementById("title");
//start.addEventListener("click", test); 


//function test() {

    //for (var i = 0; i < questions.length; i++){//start loop
    
        //print
        //question.innerHTML = questions[1].question;

        //print answers
        //choiceA.innerHTML = questions[1].answers.a;    
        //choiceB.innerHTML = questions[1].answers.b;
        //choiceC.innerHTML = questions[1].answers.c;
        //choiceD.innerHTML = questions[1].answers.d;    
    

    //end of for loop
//startquiz.style.display = "none"; 
//}; 



// now how to wait for users response/interaction  
//setTimeout(function () {
        
    //question()

//create click function for multiple choice questions

//create for loop to go thru questions

//create if statement if answer is correct 

//create else statement if answer is incorrect

//create setInternal function to countdown timer 

//create input to put name and score when quiz is over 

//save to local storage




//enter quiz element

// function start() {

//}







// var quizContainer = document.getElementById('quiz'); 
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit'); 

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


// //generate quiz 
// function generateQuiz(question, quizContainer, resultsContainer, submitButton, submitButton) {

// }

// //make questions for quiz 
// function showQuestions(question, quizContainer) {
// // need a place to store the output and the answer choices
//     var output = []; 
//     var answers; 


//     //for each question 
//     for(var i=0; i<question.length; i++) { 

//         //first reset the list of answers output
//         answers = []; 

//         //for each available answer to this question
//         for(letter in question[i].answers){
            
//         //add an html radio button
//         answers.push( 
//             '<label>'
//             + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//             +letter + ':'
//             +question[i].answer[letter]
//             + '</label>'
//         ); 

//     }

//     //add this question and its answers to the output 
//     output.push(
//         '<div class="questions">' + question[i].question + '</div>'
//         + '<div class="answers">' + answers.join(', ') + '</div>'
//     ); 

//     }
//     //finally combine our output list into one string of html and put it on the page
//     quizContainer.innerHTML = output.join(''); 

// }

// //user gets results from quiz 
// function showResults(question, quizContainer, resultsContainer) {

//     //gather answer containers from quiz 
//     var answerContainer = quizContainer.querySelector('.answers'); 

//     //keep track of user's answers 
//     var userAnswer = ''; 
//     var numCorrect = 0; i

//     //for each question 
//     for(var i=0; i<questions.length; i++) {
        
//     //find selected answer
//     userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;

//     //if answer is correct
//     if(userAnswer===questions[i].correctAnswer){
//         //add to the number of correect answers
//         numCorrect++; 
        
//         //color the answers blue 
//         answerContainer[i].style.color = 'lightgreen'; 
//     }
//     //if answer is wrong or blank 

//     else{ 
//         //color the answers red
//         answerContainer[i].style.color = 'red'; 
//         }
//     }
//     //show number of correct answers out of total number of correct answers
//     resultsContainer.innerHTML = numCorrect + 'out of' + questions.length; 
// }

// //callback questions gets
// showQuestions(questions, quizContainer); 

// //when user clicks submit, show results 
// submitButton.onclick = function() {
//     showResults(questions,quizContainer,resultsContainer); 

// }
