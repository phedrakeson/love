const wrapper = document.querySelector('.wrapper');
const result = document.querySelector('.result');
const runner = document.getElementById('runner');
const fixed = document.getElementById('fixed');
const primaryTitle = document.querySelector('.primary-title');
const secondaryTitle = document.querySelector('.secondary-title');
const max_count = 10;
let count = 0;

function avoidMouse() {
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

  count += 1;
  showFixedButton();
}

function showFixedButton() {
  if (count < max_count) return;
  fixed.style.display = 'inline-block';
}

function showResult() {
  wrapper.style.display = 'none';
  result.style.display = 'flex';
  primaryTitle.style.display = 'none';
  secondaryTitle.style.display = 'block';
}

runner.addEventListener('mouseover', avoidMouse);
runner.addEventListener('click', avoidMouse);
fixed.addEventListener('click', showResult);