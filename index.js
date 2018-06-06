const array = []
const app = {
    init: function() {
      const form = document.querySelector('form')
      form.addEventListener('submit', ev => {
        this.handleSubmit(ev)
      })
    },
  
    renderProperty: function(name, value) {
      const el = document.createElement('span')
      el.textContent = value
      el.classList.add(name)
      return el
    },
  
    renderItem: function(spell) {
      // ['name', 'level']
      properties = Object.keys(spell)
  
      // collect an array of renderProperty's return values
      // (an array of <span> elements)
      const childElements = properties.map(property => {
        return this.renderProperty(property, spell[property])
      })
  
      const item = document.createElement('li')
      item.classList.add('spell')
  
      // append each <span> to the <li>
      childElements.forEach(el => {
        item.appendChild(el)
      })
      
      const button = item.appendChild(document.createElement('button'))
      button.textContent = 'Delete'

      
      return item
    },
  
    handleSubmit: function(ev) {
      ev.preventDefault()
  
      const f = ev.target
  
      const spell = {
        name: f.spellName.value,
        level: f.level.value,
      }

      array.unshift(f.spellName.value)
      console.log(array)

      const item = this.renderItem(spell)
  
      const list = document.querySelector('#spells')
      list.appendChild(item)
  
      f.reset()
    },

    //storeSpell: function(spellArray){
      //  const newSpell = document.querySelector('span.name')
        //const addToArray = newSpell.textContent
        //array.unshift(addToArray)
    }

  app.init()