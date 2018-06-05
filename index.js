
const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const goodOrEvil = f.goodOrEvil.value

  const spellsDiv = document.querySelector('#spells')
  spellsDiv.innerHTML += `<li>${spellName} ${goodOrEvil}</li>`

  f.reset()
}

form.addEventListener('submit', changeHeading)