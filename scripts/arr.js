function sumMultiply(array) {
  if (!Array.isArray(array) || array.lenth !==4) {
    return 'Array is expected to have 4 numbers';
  }

  return array[0] * array[1] + array[2] * array [3];
}
function runSumMultiply() {
  const userArray = prompt('Enter array:', '[2, 5, 3, 9]') || [];

  const result = sumMultiply(userArray);

  alert(result);
} 

function dayNumber(week) {
  const week = {1: 'Пн', 2: "Вт", 3: "Ср", 4: "Чт", 5: "Пт", 6: "Сб", 7: "Вскр"};
  return week[userDay];
}
function runDayNumber() {
  const userDay = Number(prompt('Введите число дня недели', [3]));
  const show = dayNumber(userDay);
  alert(show);
}


// let lang = 'ru' || 'en';
// let day = 5;
// let week = {
//   'ru': ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вскр"],
//   'en': ["M", "T", "W", "Th", "Fr", "St", "Sd"],
// };
// alert(week[lang][day]);