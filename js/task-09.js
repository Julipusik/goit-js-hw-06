const colorChangeBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const randomHex = getRandomHexColor();

const backgroundChange = (event) => {
  bodyEl.style.backgroundColor = randomHex;
  spanEl.textContent = randomHex;
};

colorChangeBtn.addEventListener('click', backgroundChange);