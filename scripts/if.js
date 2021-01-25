const yearMonths = ['winter', 'spring', 'summer', 'autumn'];

function getTimeOfYear() {
  const userNumber = Number(prompt('Enter a number from 1 to 4', 1) || 0);
       
  if (userNumber < 1 && userNumber > 4) {
    alert('Enter valid number from 1 to 4 please');
    
    return;
  }

  const timeOfYear = yearMonths[userNumber - 1];

  switch (userNumber) {
    case 1:
      alert(`It is ${timeOfYear}!`); 
    break;
    case 2:
      alert(`It is ${timeOfYear}!`);
    break;
    case 3:
      alert(`It is ${timeOfYear}!`);
    break;
    case 4:
      alert(`It is ${timeOfYear}!`);
    break;
  }
}

const months = {1: 'winter', 2: 'winter', 3: 'winter', 4: 'spring', 5: 'spring', 6: 'spring', 7: 'summer', 8: 'summer', 9: 'summer', 10: 'autumn', 11: 'autumn', 12: 'autumn'};

function getMonth() {
  const userMonth = Number(prompt('Enter a number of month from 1 to 12', 1) || 0);

  if (userMonth < 1 && userMonth > 12) {
    alert('Enter the month number please, from 1 to 12');

    return;
  }

  const result = months[userMonth];

  alert(`Your time of year is ${result}.`);
}