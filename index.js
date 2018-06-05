function changeTextButton (){
    const header = document.querySelector('h1')
    const header2 = document.querySelector('#billy')
    const header3 = document.querySelector('.dj')
    header.textContent = 'T-Rex'
    header2.textContent = 'Bumblebee'
    header3.textContent = 'Giraffe'
}
function submitText(){
    const changingHeader = document.querySelector('#star')
    const inputText = document.querySelector('#myForm')
    changingHeader.textContent = alert(document.querySelector('#text'))
}
const button = document.querySelector('button')
const submitButton = document.querySelector('#submitButton')
button.addEventListener('click', changeTextButton)
submitButton.addEventListener('click', submitText)

