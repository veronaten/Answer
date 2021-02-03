const week = ['Md', 'Ts', 'Ws', 'Th', 'Fr', 'St', 'Sd'];

function chooseWeekDays() {
  let chooseDay = Number(prompt('Enter number today day jf the week, from 1 to 7', '1') || 0);

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
