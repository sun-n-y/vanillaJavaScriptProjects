// ****** SELECT ITEMS **********

const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.list');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFLag = false;
let editID;

// ****** EVENT LISTENERS **********
//form submit
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFLag) {
    console.log('new value');
  } else if (value && editFLag) {
    console.log('edit value');
  } else {
    displayAlert('empty value', 'danger');
  }

  //display alert
  function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function () {
      alert.textContent = '';
      alert.classList.remove(`alert-${action}`);
    }, 1000);
  }
}
// ****** LOCAL STORAGE **********
// ****** SETUP ITEMS **********
