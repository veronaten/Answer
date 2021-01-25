const year = ['winter', 'spring', 'summer', 'autumn'];

function getTimeOfYear() {
  const userNumber = Number(prompt('Enter a number from 1 to 4', 1) || 0);
      
  if (userNumber < 1 && userNumber > 4) {
    alert('Enter valid number from 1 to 4 please');
    
    return;
  }

  const timeOfYear = year[userNumber - 1];

  alert(`It is ${timeOfYear}!`);
}