const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

//target interactive elements like btn and color
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

//event listener for click events
btn.addEventListener('click', function () {
  //logic - change background color every time btn is clicked
  //get random number bebtween 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//function to get random number
//multiply by array length = values from (1-4) with math random which is between 0-1, then multiply by 10 to get 0-3 values
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
