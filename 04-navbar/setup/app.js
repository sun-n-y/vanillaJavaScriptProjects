// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class -short way

//target elements
const navToogle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//event listener
navToogle.addEventListener('click', function () {
  //   console.log(links.classList);
  //   console.log(links.classList.contains('random'));
  //   console.log(links.classList.contains('links'));
  //   //longer way
  //   if (links.classList.contains('show-links')) {
  //     links.classList.remove('show-links');
  //   } else {
  //     links.classList.add('show-links');
  //   }
  //shorter way
  links.classList.toggle('show-links');
});
