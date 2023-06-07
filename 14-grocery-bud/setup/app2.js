// ****** SELECT ITEMS **********

const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
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
    //add element
    const element = document.createElement('article');
    //add class to element
    element.classList.add('grocery-item');
    //add attribute element
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    //add html to element
    element.innerHTML = `<p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>`;
    //append child to list
    list.appendChild(element);
    //display alert
    displayAlert('item added', 'success');
    //show contianer
    container.classList.add('show-container');
    //add to local storage
    addToLocalStorage(id, value);
    //set back to default
    setBackToDefault();
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

function setBackToDefault() {
  console.log(`back to default`);
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log(`added to local storage`);
}
// ****** SETUP ITEMS **********
