var storage = JSON.parse(localStorage.getItem('quizHighscore'))

if( storage === null) {
    document.querySelector('.scores').textContent = 'No Scores'
} else {
    document.querySelector('.scores').textContent = ''
    for (var i = 0; i < storage.length; i ++) {
        var scores = document.createElement('h4')
        scores.textContent = 'Name: ' + storage[i].name + " ----------------- Score: " + storage[i].finalScore
        document.querySelector('.scores').append(scores)
    }
}