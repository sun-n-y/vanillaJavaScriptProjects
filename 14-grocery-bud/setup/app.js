// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFLag = false;
let editID = '';

// ****** EVENT LISTENERS **********
//submitForm
form.addEventListener('submit', addItem);
//clear items
clearBtn.addEventListener('click', clearItems);

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
    //add attribute to element
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
    //access to delete and edit button
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    //event listner for delete and edit buttons
    deleteBtn.addEventListener('click', delteItem);
    editBtn.addEventListener('click', editItem);
    //append child to list
    list.appendChild(element);
    //display alert
    displayAlert('item added to list', 'success');
    //show contianer
    container.classList.add('show-container');
    //add to local storage
    addToLocalStorage(id, value);
    //set back to default
    setBackToDefault();
  } else if (value && editFLag) {
    editElement.innerHTML = value;
    displayAlert('value changed', 'success');
    //edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert('empty value', 'danger');
  }
}

//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  //remove alert
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

//clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('list cleared', 'success');
  setBackToDefault();
  //   localStorage.removeItem('list')
}

//delete function
function delteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('item removed', 'danger');
  setBackToDefault();
  //remove from local storage
  removeFromLocalStorage(id);
}
//edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  //set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  //set form value
  grocery.value = editElement.innerHTML;
  editFLag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'edit';
}

//set back to default
function setBackToDefault() {
  grocery.value = '';
  editFLag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  const grocery = { id: id, value: value };
  let items = getLocalStorage();
  console.log(items);
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {}

function editLocalStorage(id, value) {
  let items = get.localStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

// localstorage API
// setitem
// getitem
// remove item
// save as strings
// ****** SETUP ITEMS **********
