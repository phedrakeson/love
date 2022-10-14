import counting from './counter.js'
import { modal, modalPos } from './modal.js'

const reject = document.querySelector('.button--reject')
const accept = document.querySelector('.button--accept')

const proximit = () => {
  // Passar como argumento o botão

  const positions = {
    top: reject.offsetTop,
    left: reject.offsetLeft,
    randomY() {
      return Math.random() * this.top
    },
    randomX() {
      return Math.random() * this.left
    }
  }

  const moveToRight = reject.addEventListener('mouseenter', () => {
    let count = 0

    reject.style.transform += `translateX(${positions.randomX()}px)`

    let moveToDown = setInterval(() => {
      count += 1

      reject.style.transform += `translateY(${positions.randomY()}px)`

      if (count === 3) {
        clearInterval(moveToDown)
        reject.style.removeProperty('transform')
      }
    }, 650)
  })
}

accept.addEventListener('click', modalPos)


proximit()

counting(accept)
