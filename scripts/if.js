function timeOfYear() {
  const userNum = Number(prompt('Enter a number from 1 to 4', 1) || 0);
      
  if (userNum < 1 && userNum > 4) {
    alert('Enter valid number from 1 to 4 please');
    
    return;
  }
    
  switch (userNum) {
    case 1:
      alert('It is summer!');
    break;
    case 2:
      alert('It is autumn!');
    break;
    case 3:
      alert('It is winter!');
    break;
    case 4:
      alert('It is spring!');
    break;
    default:
      alert('Enter valid number from 1 to 4 please');
    break;
  }
}