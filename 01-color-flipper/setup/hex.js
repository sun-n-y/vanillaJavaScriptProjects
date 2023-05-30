//
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//typical hex color is : #f150f5 = #(15)(1)(5)(0)(15)(5) -index values

//select elements
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//add event listeners
btn.addEventListener('click', function () {
  let hexColor = '#';
  //loop that runs 6 times (for 6 random values) and add to hexcolor value
  //(i=0;i<6) = 0 to 5 = 6 times
  for (
    let i = 0;
    i < 6;
    i++ //loop logic
  ) {
    //takes old value and adds to it
    hexColor += hex[getRandomNumber()];
    // console.log(hexColor);
  }
  {
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
  }
});

//two code blocks in for loop

//fucntion to get random values from hex array
//hex array length is 1-15 but mulitpltied by values between 0-1 , and round down means values will be 0-14, which works out for indexing
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
