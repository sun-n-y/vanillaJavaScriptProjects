//select targer elements
const navbtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

//event listener
navbtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

window.addEventListener('click', function (e) {
  if (e.target.classList == '' && sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove('show-sidebar');
  }
});
