
const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const goodOrEvil = f.goodOrEvil.value

  const spellsDiv = document.querySelector('#spells')
  const newLi = document.createElement('li')
  const newSpan = document.createElement('span')
  const newSpan2 = document.createElement('span')
  const spellNameText = document.createTextNode(spellName +': ')
  const spellNameGE = document.createTextNode(goodOrEvil)
    newSpan.appendChild(spellNameText)
    newSpan2.appendChild(spellNameGE)
    newLi.appendChild(newSpan)
    newLi.appendChild(newSpan2)
    spellsDiv.appendChild(newLi)

  //const spellInfo = document.createTextNode(`${spellName} : ${goodOrEvil}`)
  //newLi.appendChild(spellInfo)
  //spellsDiv.innerHTML += `<li>${spellName} : ${goodOrEvil}</li>`
  //spellsDiv.appendChild(newLi)
  f.reset()
}

form.addEventListener('submit', changeHeading)