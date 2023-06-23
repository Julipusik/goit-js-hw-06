const inputEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

const changeFontSize = (event) => {
    textEl.style.fontSize = `${inputEl.value}px`;
}

inputEl.addEventListener('input', changeFontSize);
