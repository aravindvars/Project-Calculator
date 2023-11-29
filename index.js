let x = '';
const getNumberValue = function () {
  console.log('run');
  x += this.innerHTML;
  display.value = x;
  console.log(typeof x);
};
function operate() {
  console.log('Operating');
}
function clearDisplay() {
  console.log('clearing');
  display.value = '';
}
const numberButton = Array.from(document.querySelectorAll('.numberbutton'));
const display = document.querySelector('#enter-text');
const equalTo = document.querySelector('.equalTo');
const clearButton = document.querySelector('.clear');

numberButton.forEach((nb) => nb.addEventListener('click', getNumberValue));
equalTo.addEventListener('click', operate);
clearButton.addEventListener('click', clearDisplay);
