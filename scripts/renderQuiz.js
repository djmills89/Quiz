function renderQuiz(quizData) {
    // data
    let userChoice = 'html'
    let currentQuestion = 2
    let currentQuiz = quizData.quizzes.find( quiz => quiz.title.toLowerCase() === userChoice.toLowerCase())

    const titleDisplay = document.querySelector('.title')
    const questionContainer = document.querySelector('.question__container')
    const questionDisplay = document.querySelector('.question__display')
    const questionNumberDisplay = document.querySelector('.question__number')
    const answerChoices = document.querySelectorAll('.answer__choices')
    const progressBar = document.querySelector('.progress__bar')
    const quizChoiceButtons = document.querySelectorAll('button')
    quizChoiceButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault
            titleDisplay.classList.add('hide__content')
            questionContainer.classList.remove('hide__content')
            questionNumberDisplay.textContent = `Question ${currentQuestion + 1} of ${currentQuiz.questions.length}`
            userChoice = e.currentTarget.value
            currentQuiz = quizData.quizzes.find( quiz => quiz.title.toLowerCase() === userChoice.toLowerCase())
            progressBar.style.width = `calc(${currentQuestion + 1} / 10 * 100%)`

            questionDisplay.textContent = currentQuiz.questions[currentQuestion].question
            answerChoices.forEach( (choice, index) => {
                choice.textContent = currentQuiz.questions[currentQuestion].options[index]
            })
        })
    })

    progressBar.style.width = `calc(${currentQuestion + 1} / 10 * 100%)`

    questionDisplay.textContent = currentQuiz.questions[currentQuestion].question
    answerChoices.forEach( (choice, index) => {
        choice.textContent = currentQuiz.questions[currentQuestion].options[index]
    })

    console.log(currentQuiz)
}

const userAnswers = {
    correct: [1,2,4,6,7,8,9],
    incorrect: [3,5,10],
    possible: 10,
    score() {
        return this.correct.length / this.possible * 100
    }
}

console.log(userAnswers.score())