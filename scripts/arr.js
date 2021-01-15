
let arr = [2, 5, 3, 9];
let result = (arr[0]*arr[1]) + (arr[2]*arr[3]);
alert(result);


let week = {1: 'Пн', 2: "Вт", 3: "Ср", 4: "Чт", 5: "Пт", 6: "Сб", 7: "Вскр"};
let day = 3;
alert(week[`${day}`]);


let lang = 'ru' || 'en';
let day = 5;
let week = {
  'ru': ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вскр"],
  'en': ["M", "T", "W", "Th", "Fr", "St", "Sd"],
};
alert(week[lang][day]);