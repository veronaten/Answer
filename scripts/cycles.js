const week = ['Md', 'Ts', 'Ws', 'Th', 'Fr', 'St', 'Sd'];

function chooseWeekDays() {
  const chooseDay = Number(prompt('Enter number today day jf the week, from 1 to 7', '1') || 0);

  if (chooseDay < 1 || chooseDay > 7 || Number.isNaN(chooseDay)) {
    alert('Enter valid number, please, from 1 to 7');

    return;
  }

  for (let day = 0; day < week.length; day++) {
    if (day === chooseDay - 1) {
      document.write(week[day].italics());
    } else {
      document.write(week[day]);
    }
  }
}

function countNumber() {
  let n = 1000;

  const iterationCount = Number(prompt('How many iterations do you need to divide 1000 by 2 until the result becomes < 50? Enter the number:', '1') || 0);

  if (Number.isNaN(iterationCount)) {
    alert('Enter number, please.');

    return;
  }

  for (num = 1; num <= iterationCount; num++) {
    n = n / 2;
    if (n > 50) {
      alert(`${n} is not correct, try to increase the number!!!`);
    } else if ( n > 30 && n < 50) {
      alert(`${n}: yes, that's 5 times!!!`);
    } else if (n < 30) {
      alert(`${n} is not correct, try to reduce the number`);
      break;
    }  
  }
}