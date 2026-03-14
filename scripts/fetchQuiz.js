async function init() {
    const response = await fetch('../data.json')
    const data = await response.json()

    let userChoice = 'html'
    let currentQuestion = 6
    let currentQuiz = data.quizzes.find( quiz => quiz.title.toLowerCase() === userChoice.toLowerCase())

    const questionDisplay = document.querySelector('.question__display')
    const answerChoices = document.querySelectorAll('.answer__choices')
    const progressBar = document.querySelector('.progress__bar')
    const quizChoiceButtons = document.querySelectorAll('button')
    quizChoiceButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault
            userChoice = e.target.value
            currentQuiz = data.quizzes.find( quiz => quiz.title.toLowerCase() === userChoice.toLowerCase())
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

init()