export const modal = document.querySelector('dialog')

const img = {
  el: modal.querySelector('img'),
  positive: '../img/icon/after-10-yes.svg',
  negative: '../img/icon/after-10-not-tentatives.svg'
}

const text = {
  el: modal.querySelector('p'),
  positive:
    'Te entrego meu coração para que dele cuides tão bem quanto cuidarei do seu.',
  negative:
    '  Não se acanhe, nosso amor é azul como o mar azul, nada pode mudar isso I Love You S2'
}

const modalPositive = {
  img: img.positive,
  text: text.positive
}

const modalNegative = {
  img: img.negative,
  text: text.negative
}

export function modalPos() {
  modal.showModal()

  // img.el.setAttribute('src', img.positive)
  // text.el.setAttribute('src', text.positive)
}
