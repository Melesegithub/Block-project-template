/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var numbers;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


numbers = [0, 0, 0];
numbers = [0, 0, null];


document.getElementById('add_number').addEventListener('click', (event) => {
  numbers.push(getNumberOrString(document.getElementById('number').value));
  let element_total = document.getElementById('total');
  element_total.innerText = numbers.reduce((a,b) => a+b, 0);
  numbers.shift();

});
