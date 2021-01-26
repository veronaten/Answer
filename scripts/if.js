const seasons = ['winter', 'spring', 'summer', 'autumn'];

function getTimeOfYear() {
  const userNumber = Number(prompt('Enter a number from 1 to 4', 1) || 0);
       
  if (userNumber < 1 || userNumber > 4) {
    alert('Enter valid number from 1 to 4 please');
    
    return;
  }

  switch (userNumber) {
    case 1:
      alert(`It is ${seasons[0]}!`); 
    break;
    case 2:
      alert(`It is ${seasons[1]}!`);
    break;
    case 3:
      alert(`It is ${seasons[2]}!`);
    break;
    case 4:
      alert(`It is ${seasons[3]}!`);
    break;
  }
}

function getMonth() {
  const userMonth = Number(prompt('Enter a number of month from 1 to 12', 1) || 0);

  if (userMonth < 1 || userMonth > 12) {
    alert('Enter the month number please, from 1 to 12');

    return;
  }

  if (userMonth == 1 && userMonth < 4) {
    alert(`It is ${seasons[0]}`); 
  } else if (userMonth >= 4 && userMonth < 7) {
    alert(`It is ${seasons[1]}`);
  } else if (userMonth >=7 && userMonth < 10) {
    alert(`It is ${seasons[2]}`);
  } else if (userMonth >= 10 && userMonth <= 12) {
    alert(`It is ${seasons[3]}`);
  }
}