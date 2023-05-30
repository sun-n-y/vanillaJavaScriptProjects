//set up initial count value
let count = 0;

//target elements
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//select all buttons using for each, then add event listener
btns.forEach(function (btn) {
  //use event object to check which object you are clicking
  btn.addEventListener('click', function (e) {
    //store info of item class list
    const styles = e.currentTarget.classList;
    //if logic
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
