'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Old School way

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btnsOpenModal => {
  btnsOpenModal.addEventListener(`click`, openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// How dom really works?

// DOM is an Interface b/w the JavaScript and the Browser.

// It allows us to make JS Interact with the browser.

// we can write JS Code to create,modify and delete HTML elements; set styles,classes and attributes; and listen and response to elements.

// DOM TREE is generated from an HTML element, which we can Interact with

// DOM is an complex API that contains a lot of methods and properties to Interact with the DOM tree.

// Selecting,Creating and Deleting Elements

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// Selecting Elements
const header = document.querySelector(`header`);
const allSections = document.querySelectorAll(`section`);
// console.log(header);
// console.log(allSections);

// console.log(document.getElementById(`section--1`));
const allBtns = document.getElementsByTagName('button');
// console.log(allBtns);

// console.log(document.getElementsByClassName(`btn`));

// Creating and Inserting Elements

// Inserting Elements

// .insertAdjcentElement

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cokkies for Improved functionalities and analytics.`;
message.innerHTML = `We use cokkies for Improved functionalities and analytics.
<button class="btn  btn--close-cookie">Got it!</button>`;
header.append(message);
// header.prepend(message);
// header.before(message);
// header.after(message);
// header.append(message.cloneNode(true));

// Deleting Elements Dynamically

// const cookieBtn = document.getElementsByClassName(`btn--close-cookie`);
// console.log(cookieBtn);

// for (let i = 0; i < cookieBtn.length; i++) {
//   cookieBtn[i].addEventListener('click', e => {
//     console.log('click Me!!');
//     message.remove();
//   });
// }

const cookieBtn = document.querySelector(`.btn--close-cookie`);

cookieBtn.addEventListener(`click`, e => message.remove());

// Styles,Attributes and Classed

// Styles
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

// readiing inline styles of a element
// console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + `px`;

// Woring with the css custom properties

// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Working with the attributes

// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.src);

// Implementing the Smooth Scrolling

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
// console.log(btnScrollTo);

btnScrollTo.addEventListener(`click`, e => {
  // This gives the coordinates of the element
  const s1Coords = section1.getBoundingClientRect();

  // Scrolling
  // window.scrollTo(
  //   s1Coords.left + window.pageXOffset,
  //   s1Coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // The above methods all are old school methods for Implementing smooth scrolling but there is also a modern method

  section1.scrollIntoView({ behavior: 'smooth' });
});
