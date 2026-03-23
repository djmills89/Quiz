const toggle = document.querySelector('.toggle__container')
const toggleControl = document.querySelector('.toggle__control')
let isDarkMode
toggle.addEventListener('click', (e) => {
    isDarkMode = !isDarkMode
    toggleControl.classList.toggle('toggle__transform')
    if (isDarkMode) document.documentElement.dataset.theme = 'dark'
    else document.documentElement.dataset.theme = 'light'
})