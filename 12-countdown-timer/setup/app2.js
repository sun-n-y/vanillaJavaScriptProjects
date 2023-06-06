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

let futureDate = new Date(2023, 5, 6, 13, 30, 0);

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

//future date in ms
const futureTime = futureDate.getTime();

function remainingTime() {
  let today = new Date().getTime();
  const t = futureTime - today;

  const oneMinute = 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / onehour);
  let mins = Math.floor((t % onehour) / oneMinute);
  let secs = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, mins, secs];

  function formatTime(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.textContent = formatTime(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`;
  }
}
let countdown = setInterval(remainingTime, 1000);

remainingTime();
