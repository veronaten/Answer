function sumMultiply(array) {
  if (!Array.isArray(array) || array.length !== 4) {
    return 'Array is expected to have 4 numbers';
  }

  return array[0] * array[1] + array[2] * array [3];
}

function runSumMultiply() {
  const userNumbers = prompt('Enter 4 numbers divided by space:', '2 5 3 9') || '0';

  const array = userNumbers.split(' ');

  const result = sumMultiply(array);

  alert(result);
} 

const week = { 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Вскр' }

function runDayNumber() {
  const userDayNumber = Number(prompt('Enter the number of the day of the week', 3) || 0);

  if (Number.isNaN(userDayNumber)) {
    alert('Enter valid number please')

    return
  }

  const dayName = week[userDayNumber];

  alert(`Here's your day: ${dayName}`);
}

const weekDay = { 1: 'Md', 2: 'Ts', 3: 'W', 4: 'Th', 5: 'Fr', 6: 'St', 7: 'Sd'};
    
function chooseLang() {
    const userLang = prompt('Select a language: "ru" or "eng"', 'ru');

    if (userLang === 'ru') {
        runDayNumber();
    } else if (userLang === 'eng') {
        runDayChoose();
    } else {
        alert('Select a language and enter "ru" or "eng"');
    }
    return
}

function runDayChoose() {
  const userDayNumber = Number(prompt('Enter the number of the day of the week', 3) || 0);

  if (Number.isNaN(userDayNumber)) {
    alert('Enter valid number please')

    return
  }

  const dayName = weekDay[userDayNumber];

  alert(`Here's your day: ${dayName}`);
}
