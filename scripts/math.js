function findMean() {
  const userNumbers = prompt('Enter some integer numbers separated by spaces', '12 15 20 25 59 79') || '0';

  const array = userNumbers.split(' ');

  if (!Array.isArray(array) || array.length < 2) {
    alert('Enter minimum 2 numbers separated by space, please');
  }

  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result = result + array[i] / 2;
  }

  alert(`The arithmetic mean of your array is ${result}.`);
}

function findFactorial() {
  const inputNumber = Number(prompt('Enter a number', '5') || 0);

  if (Number.isNaN(inputNumber)) {
    alert('Enter a number, please.');

    return;
  }

  let result = 1;

  for (let i = 1; i < inputNumber; i++) {
    result *= i;
  }
  
  const factorial = result * inputNumber;

  alert(`The factorial ${inputNumber}! is ${factorial}`);
}