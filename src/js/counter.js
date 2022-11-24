const count = document.querySelector('.counter')

const counting = button => {
  let isClicked = 1
  button.addEventListener('click', () => {
    count.classList.add('is-active')
    count.innerHTML = isClicked++
  })
}

export default counting