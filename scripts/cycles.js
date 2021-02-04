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

let n = 1000;

function countNumber() {
  const iteration = Number(prompt('How many times do you need to divide 1000 by 2 until the result becomes < 50 ? Enter the number', '1') || 0);

  if (Number.isNaN(iteration)) {
    alert('Enter number, please.');

    return;
  }

  for (num = 1; num <= iteration; num++) {
    n = n / 2;
    if (n > 50) {
      alert(`${n} , not correct, try increasing the number !!!`);
    } else if ( n > 30 && n < 50) {
      alert(`${n} , yes, tha's 5 times!!!`);
    } else if (n < 30) {
      alert(`${n}  , not correct, try reducing the number`);
      break;
    }  
  }
}