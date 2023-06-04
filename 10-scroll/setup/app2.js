// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
// ********** set date ************

const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const nav = document.querySelector('#nav');
const topBtn = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  if (scrollY > 80) {
    nav.classList.add('fixed-nav');
    topBtn.classList.add('show-link');
  } else {
    nav.classList.remove('fixed-nav');
    topBtn.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (scrollLink) {
  scrollLink.addEventListener('click', function (e) {
    e.preventDefault();
    const attribute = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(attribute);
    if (nav.classList.contains('fixed-nav')) {
      let pixelLocation = element.offsetTop - 82;
      window.scrollTo({ left: 0, top: pixelLocation });
    }
    if (!nav.classList.contains('fixed-nav')) {
      let pixelLocation = element.offsetTop - 164;
      window.scrollTo({ left: 0, top: pixelLocation });
    }
  });
});
