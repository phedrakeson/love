import counting from './counter.js'
import { proximity } from './proximity.js'
import { modal, modalNegative } from './modal.js'

const reject = document.querySelector('.button--reject')
const accept = document.querySelector('.button--accept')


// Abrir modal

let count = 0
accept.addEventListener('click', ()=>{
  if(count == 4){
    modal.showModal()
  }
  count++
})

reject.addEventListener('mouseenter', ()=>{
  if(count == 3){
    modalNegative()
  }
  count++
})

// Verificar se o mouse está perto do botão não
proximity(reject)

// Contagem de cliques
counting(accept)
