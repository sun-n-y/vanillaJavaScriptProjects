// set date

const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

//close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//fixed nav bar and scroll to top button
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  let navbarHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (window.scrollY > 600) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

//smooth scroll precisely
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    //heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let positon = element.offsetTop - navHeight;

    if (!fixedNav) {
      positon = positon - navHeight;
    }
    if (navHeight > 82) {
      positon = positon + containerHeight;
    }

    window.scrollTo({ left: 0, top: positon });

    linksContainer.style.height = 0;
  });
});
