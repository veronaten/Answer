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

const  weekDaysByLanguage = {
  'eng': ['Mn', 'Ts', 'Ws', 'Th', 'Fr', 'St', 'Sd'],
  'ru': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вскр']
};

function revealTheDay() {
  const userLang = prompt('Select a language: "ru" or "eng"', 'ru');

  let dayNumberQuestionString = 'Enter the number the day of the week';

  if(userLang === 'ru') {
    dayNumberQuestionString = 'Введите номер дня недели';
  }

  const userDayNumber = Number(prompt(dayNumberQuestionString, 3) || 0);

  const isDayNumberValid = !Number.isNaN(userDayNumber) && userDayNumber > 0 && userDayNumber <= 7;

  if(!isDayNumberValid) {
    alert(userLang === 'ru' ? 'Введено неверное занчение' : 'Enter valid number please');

    return;
  }
  
  const userDayName = weekDaysByLanguage[userLang][userDayNumber - 1];

  const alertMessage = userLang === 'ru' ? 'Вот ваш день' : 'Here is your day';

  alert(`${alertMessage}: ${userDayName}`);
}



