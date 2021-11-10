//create questions and answers 
var myQuestions = [
    { 
        question: "Commonly used data types DO NOT include: ",  
        answers: {
            a: 'strings', 
            b: 'booleans', 
            c: 'alerts', 
            d: 'numbers', 
        }, 
    correctAnswer: 'b: booleans'
    }, 

    {
        question: "Arrays in JavaScript can be used to store ________.", 
        answers: { 

            a: 'numbers and strings', 
            b: 'other arrays', 
            c: 'booleans', 
            d: 'all of the above' 
        }, 
        correctAnswer: 'd: all of the above'
    }, 
    {
       question: "String values must be enclosed within ______ when being assigned to variables.", 
       answers: { 

        a: 'commas', 
        b: 'curly brackets', 
        c: 'quotes', 
        d: 'parenthesis' 
       }, 
       correctAnswer: 'b: curly brackets'
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: {
            a: 'JavaScript', 
            b: 'Terminal/bash', 
            c: 'for loops', 
            d: 'console.log' 
        }, 
        correctAnswer: 'd: console.log'
    }
];


//generate quiz 
function generateQuiz(questions, quizContainer, resultsContainer, submitButton, submitButton) {

}

//make questions for quiz 
function showQuestions(questions, quizContainer) {
// need a place to store the output and the answer choices
var output = []; 
var answers; 


//for each question 
for(var i=0; i<question.length; i++) { 

    //first reset the list of answers output
    answers = []; 

    //for each available answer to this question
    for(letter in questions[i].answers){
        
    //add an html radio button
    answers.push( 
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        +letter + ':'
        +questions[i].answer[letter]
        + '</label>'
    ); 

}

//add this question and its answers to the output 
output.push(
    '<div class="questions">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join(', ') + '</div>'
); 

}
//finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = output.join(''); 

}

//user gets results from quiz 
function showResults(questions, quizContainer, resultsContainer) {

}

//callback questions gets
showQuestions(questions, quizContainer); 

//when user clicks submit, show results 
submitButton.onclick = function() {
    showResults(questions,quizContainer,resultsContainer); 

}
