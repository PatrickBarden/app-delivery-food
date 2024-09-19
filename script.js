const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const counterSpan = document.getElementById('counter');
let counter = 1;

decrementButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterSpan.textContent = counter;
    }
});

incrementButton.addEventListener('click', () => {
    counter++;
    counterSpan.textContent = counter;
});

