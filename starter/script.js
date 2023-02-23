'use strict';

// Selecting Elements

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

///////////////////////////////////////
// Modal window

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

/* ********************************* */
// Smooth Scrolling
/* ********************************* */

// Button Scrolling

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

/* ********************************* */
// Smooth Scrolling
/* ********************************* */

/* ********************************* */
// Page Navigation
/* ********************************* */

// Not the efficent solution
// const navLinks = document.querySelectorAll(`.nav__link`);

// navLinks.forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

// Implementing Smooth Scrolling using event delegtion

// For Implementing event deligtion there are two steps.

// 1. Add event listener to the common parent element
// 2. determin what element generate that event
const navList = document.querySelector(`.nav__links`);

navList.addEventListener('click', function (e) {
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component

const tabs = document.querySelectorAll(`.operations__tab`);
const tabContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

// Using Event deligtion
tabContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);

  // Guaard Clause

  if (!clicked) return;

  // Removing the active class from the all tabs

  tabs.forEach(tab => tab.classList.remove(`operations__tab--active`));

  // Adding the active class to the clicked Tab
  clicked.classList.add(`operations__tab--active`);

  // Showing the active content

  const tabIndex = clicked.getAttribute('data-tab');
  // console.log(tabIndex);

  tabsContent.forEach(tab =>
    tab.classList.remove(`operations__content--active`)
  );
  document
    .querySelector(`.operations__content--${tabIndex}`)
    .classList.add(`operations__content--active`);
});

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// DOM TRAVERSING

// const h1 = document.querySelector(`h1`);

// Going downwards: Child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going Upwards/parent

// below method is used to find the direct parent node/element
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// Below method is use to find the closest parent element with the query

// h1.closest(`.header`).style.background = `var(--gradient-secondary)`;
// h1.closest(`h1`).style.background = `var(--gradient-primary)`;

// Going Sideways -> Selecting Siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// getting Nodes
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// Getting all the siblings
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(child => {
//   if (child !== h1) child.style.transform = `scale(0.5)`;
// });

// Praticing nd Exprementing

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
// const header = document.querySelector(`header`);
// const allSections = document.querySelectorAll(`section`);
// console.log(header);
// console.log(allSections);

// console.log(document.getElementById(`section--1`));
// const allBtns = document.getElementsByTagName('button');
// console.log(allBtns);

// console.log(document.getElementsByClassName(`btn`));

// Creating and Inserting Elements

// Inserting Elements

// .insertAdjcentElement

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = `We use cokkies for Improved functionalities and analytics.`;
// message.innerHTML = `We use cokkies for Improved functionalities and analytics.
// <button class="btn  btn--close-cookie">Got it!</button>`;
// header.append(message);
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

// const cookieBtn = document.querySelector(`.btn--close-cookie`);

// cookieBtn.addEventListener(`click`, e => message.remove());

// Styles,Attributes and Classed

// Styles
// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;

// readiing inline styles of a element
// console.log(getComputedStyle(message).height);
// message.style.height =
// Number.parseFloat(getComputedStyle(message).height, 10) + 40 + `px`;

// Woring with the css custom properties

// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Working with the attributes

// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.src);

// Implementing the Smooth Scrolling

// Types of Events AND Event Hnadlers

// const h1 = document.querySelector(`h1`);
// console.log(h1);

// h1.addEventListener('mouseleave', e => {
//   alert(`AddEventListener: Great you are reading the Heading!!`);
// });

// h1.addEventListener('mouseenter', e => {
//   alert(`AddEventListener: Great you are reading the Heading!!`);
// });

// Event Propogtion: Bubbling and Capturing

// random color
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);

//   // Stop Propogation
//   // e.stopPropagation();
// });

// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector(`.nav`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });
