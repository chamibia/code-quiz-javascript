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

var quizContainer = document.getElementById('quiz'); 
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit'); 

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


// window.alert("test");
//generate quiz 
function generateQuiz(question, quizContainer, resultsContainer, submitButton, submitButton) {

}

//make questions for quiz 
function showQuestions(question, quizContainer) {
// need a place to store the output and the answer choices
    var output = []; 
    var answers; 


    //for each question 
    for(var i=0; i<question.length; i++) { 

        //first reset the list of answers output
        answers = []; 

        //for each available answer to this question
        for(letter in question[i].answers){
            
        //add an html radio button
        answers.push( 
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            +letter + ':'
            +question[i].answer[letter]
            + '</label>'
        ); 

    }

    //add this question and its answers to the output 
    output.push(
        '<div class="questions">' + question[i].question + '</div>'
        + '<div class="answers">' + answers.join(', ') + '</div>'
    ); 

    }
    //finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join(''); 

}

//user gets results from quiz 
function showResults(question, quizContainer, resultsContainer) {

    //gather answer containers from quiz 
    var answerContainer = quizContainer.querySelector('.answers'); 

    //keep track of user's answers 
    var userAnswer = ''; 
    var numCorrect = 0; i

    //for each question 
    for(var i=0; i<questions.length; i++) {
        
    //find selected answer
    userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    //if answer is correct
    if(userAnswer===questions[i].correctAnswer){
        //add to the number of correect answers
        numCorrect++; 
        
        //color the answers blue 
        answerContainer[i].style.color = 'lightgreen'; 
    }
    //if answer is wrong or blank 

    else{ 
        //color the answers red
        answerContainer[i].style.color = 'red'; 
        }
    }
    //show number of correct answers out of total number of correct answers
    resultsContainer.innerHTML = numCorrect + 'out of' + questions.length; 
}

//callback questions gets
showQuestions(questions, quizContainer); 

//when user clicks submit, show results 
submitButton.onclick = function() {
    showResults(questions,quizContainer,resultsContainer); 

}