let x;
const getNumberValue = function () {
  console.log('run');
  x = this.value;
  display.innerHTML = x;
};
console.log(x);
const numberButton = Array.from(document.querySelectorAll('.numberbutton'));
const display = document.querySelector('#enter-text');

numberButton.forEach((nb) => nb.addEventListener('click', getNumberValue));
