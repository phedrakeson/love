export const proximity = (el) => {

  const positions = {
    top: el.offsetTop,
    left: el.offsetLeft,
    randomY() {
      return Math.random() * this.top
    },
    randomX() {
      return Math.random() * this.left
    }
  }

  const moveToRight = el.addEventListener('mouseenter', () => {
    let count = 0

    el.style.transform += `translateX(${positions.randomX()}px)`

    let moveToDown = setInterval(() => {
      count += 1

      el.style.transform += `translateY(${positions.randomY()}px)`

      if (count === 3) {
        clearInterval(moveToDown)
        el.style.removeProperty('transform')
      }
    }, 650)
  })
}