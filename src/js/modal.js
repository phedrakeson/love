export const modal = document.querySelector('dialog')

const img = {
  // positive: '../src/img/icon/after-10-yes.svg',
  negative: '../src/img/icon/after-10-not-tentatives.svg'
}

const text = {
  // positiveTitle: 'Seu sim mudou meu dia',
  // positive:
  //   'Te entrego meu coração para que dele cuides tão bem quanto cuidarei do seu.',
    negativeTitlte: 'Oras, poxa :/',
  negative:
    '  Não se acanhe, nosso amor é azul como o mar azul, nada pode mudar isso I Love You S2'
}


export const modalNegative = () => {
  modal.querySelector('img').setAttribute('src', img.negative)
  modal.querySelector('h2').innerText = text.negativeTitlte;
  modal.querySelector('p').innerText = text.negative
  modal.showModal()
}
