
const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const goodOrEvil = f.goodOrEvil.value

  const spellsDiv = document.querySelector('#spells')
  const newLi = document.createElement('li')
  const spellInfo = document.createTextNode(`${spellName} : ${goodOrEvil}`)
    newLi.appendChild(spellInfo)
  //spellsDiv.innerHTML += `<li>${spellName} : ${goodOrEvil}</li>`
    spellsDiv.appendChild(newLi)
  f.reset()
}

form.addEventListener('submit', changeHeading)