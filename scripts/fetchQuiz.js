async function init() {
    const response = await fetch('../data.json')
    const data = await response.json()

    renderQuiz(data)
}

init()