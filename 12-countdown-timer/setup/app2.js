//arrays for month and week day
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12,
];

//target elements

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = deadline.querySelectorAll('h4');

//

let futureDate = new Date(2023, 5, 6, 14, 0, 0);

const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hour = hours[futureDate.getHours()];
const mins = minsFormat(futureDate.getMinutes());

function minsFormat(item) {
  if (item <= 9) {
    return `0${item}`;
  }
  return item;
}

giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year}, ${hour}:${mins} PM`;

console.log(mins);
