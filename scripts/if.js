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

  let result;

  switch (userMonth) {
    case 1:
    case 2:
    case 3:
      result = seasons[0];
    break;
    case 4:
    case 5:
    case 6:
      result = seasons[1];
    break;
    case 7:
    case 8:
    case 9:
      result = seasons[2];
    break;
    case 10:
    case 11:
    case 12:
      result = seasons[3];
    break;
  } 

  alert(`It is ${result}!`);
}

function checkNumber() {
  const userNumber = prompt('Enter 5 digits', 12345) || '0';

  if (userNumber.length !== 5) {
    alert('Enter 5 digits please');

    return;
  }

  const firstSymbol = userNumber[0];

  if (firstSymbol == 1 || firstSymbol == 2 || firstSymbol == 3) {
    alert('Yes');
  } else {
    alert('No');
  }
}