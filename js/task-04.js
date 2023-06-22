let counterValue = 0;

const decrement = document.querySelector('button[data-action=decrement]');
const increment = document.querySelector('button[data-action=increment]');
const valueEl = document.querySelector('#value');

const decrementButtonClickHandler = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
decrement.addEventListener('click', decrementButtonClickHandler);

const incrementButtonClickHandler = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
increment.addEventListener('click', incrementButtonClickHandler);

