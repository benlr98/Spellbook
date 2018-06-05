function changeTextButton (){
    const header = document.querySelector('h1')
    const header2 = document.querySelector('#billy')
    const header3 = document.querySelector('.dj')
    header.textContent = 'T-Rex'
    header2.textContent = 'Bumblebee'
    header3.textContent = 'Giraffe'
}
const changeHeading = function(ev){
    ev.preventDefault()
    const f= ev.target
    const spellName = f.spellName.value
    document
        .querySelector('h1#star')
        .textContent = spellName
}
const button = document.querySelector('button')
const form = document.querySelector('form')
button.addEventListener('click', changeTextButton)
form.addEventListener('submit', changeHeading)

