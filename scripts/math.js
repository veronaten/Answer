function runArithmetic(array) {
  if (!Array.isArray(array) || array.length < 2) {
    alert('Enter minimum 2 numbers separated by space, please');
  }

  return array[i] / 2;
}

function findMean() {
  const userNumbers = prompt('Enter some integer numbers separated by spaces', '12 15 20 25 59 79') || '0';

  const array = userNumbers.split(' ');

  let result = 0;

  for (i = 0; i < array.length; i++) {
    result = result + runArithmetic(array);
  }

  alert(`The arithmetic mean of your array is ${result}.`);
}