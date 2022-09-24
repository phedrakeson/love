const wrapper = document.querySelector('.wrapper');
const result = document.querySelector('.result');
const runner = document.getElementById('runner');
const fixed = document.getElementById('fixed');

runner.addEventListener('mouseover', () => {
  const wrapperHeight = wrapper.offsetHeight;
  const wrapperWidth = wrapper.offsetWidth;
  let offsetX = runner.offsetLeft;
  let offsetY = runner.offsetTop;
  let goX = Math.random() < 0.5 ? -1 : 1;
  let goY = Math.random() < 0.5 ? -1 : 1;
  let targetSize = runner.offsetWidth;

  if (
    goX > 0 && offsetX + targetSize * goX + targetSize > wrapperHeight ||
    goX < 0 && offsetX + targetSize * goX - targetSize < 0
  ) {
    goX = goX * (-1);
  }

  if (
    goY > 0 && offsetY + targetSize * goY + targetSize > wrapperWidth ||
    goY < 0 && offsetY + targetSize * goY - targetSize < 0
  ) {
    goY = goY * (-1);
  }

  runner.style.top = offsetY + 150 * goY + 'px';
  runner.style.left = offsetX + 150 * goX + 'px';
})

fixed.addEventListener('click', () => {
  wrapper.style.display = 'none';
  result.style.display = 'flex';
})