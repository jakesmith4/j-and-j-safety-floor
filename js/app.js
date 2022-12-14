'use strict';

// Height Of Open Mobile Navbar = 224px

// VARS
// Navbar
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('.nav');
// Hero Slider
const slides = document.querySelectorAll('.slide');
const slideBtnContainer = document.querySelector('.slide-btn-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');
// Tabbed Component
const aboutBtnsContainer = document.querySelector('.about-btns-container');
const aboutbtns = document.querySelectorAll('.about-btn');
const aboutBtnsArray = Array.from(aboutbtns);
const aboutHeading = document.querySelector('.about-heading');
const aboutText = document.querySelector('.about-text');
const aboutDatas = document.querySelectorAll('.about-data');
const aboutInfo = document.querySelector('.about-info');
const aboutLinks = document.querySelectorAll('.about-link');

// TOGGLE MOBILE NAVBAR
// Toggle Navbar
const toggleNavbar = () => {
  navLinks.classList.toggle('show-links');
  navBar.classList.toggle('nav-bg-full');
};

// Navbar Event Listener
navBar.addEventListener('click', e => {
  if (e.target.classList.contains('nav-toggle')) {
    toggleNavbar();
  }

  if (e.target.classList.contains('nav-link')) {
    toggleNavbar();
  }
});

// HERO SLIDER
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
// Carousel
const carousel = () => {
  // Working With Slides
  if (counter === slides.length) counter = 0;
  if (counter < 0) counter = slides.length - 1;

  slides.forEach(
    slide => (slide.style.transform = `translateX(-${counter * 100}%)`)
  );
};

// Move Slider
const moveSlider = () => {
  counter++;
  carousel();
  activateDot(counter);
};

// Restart Timer
const restartTimer = () => {
  clearInterval(timer);
  timer = setInterval(moveSlider, 8000);
};

// Slide Slider To Right
const slideRight = () => {
  counter++;
  carousel();
  restartTimer();
  activateDot(counter);
};

// Slide Slider To Left
const slideLeft = () => {
  counter--;
  carousel();
  restartTimer();
  activateDot(counter);
};

// Go To Slide
const goToSlide = slide => {
  counter = slide;
  carousel();
  restartTimer();
  activateDot(counter);
};

// Activate Dot
const activateDot = slide => {
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('active-slider');
  });
  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add('active-slider');
};

// Auto Switch
let timer = setInterval(moveSlider, 8000);

window.addEventListener('DOMContentLoaded', () => {
  setInterval(timer);
});

// Manual Switch
slideBtnContainer.addEventListener('click', e => {
  if (e.target.classList.contains('fa-chevron-left')) slideLeft();

  if (e.target.classList.contains('fa-chevron-right')) slideRight();
});

// Keyboard Switch On Arrow Key Press
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') slideLeft();

  if (e.key === 'ArrowRight') slideRight();
});

// Create Dots
const createDots = () => {
  slides.forEach((slide, index) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<span data-slide="${index}" class="dot"></span>`
    );
  });
};
createDots();
activateDot(0);

dotsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
  }
});

// Tabbed Component
const activateAboutContent = currentBtn => {
  // Activate Tab
  aboutbtns.forEach(btn => btn.classList.add('border-transparent'));
  currentBtn.classList.remove('border-transparent');

  // Deactivate All Content Data
  aboutDatas.forEach(data => data.classList.add('hidden'));

  // Activate Current Content Data
  document
    .querySelector(`.about-data-${currentBtn.dataset.tab}`)
    .classList.remove('hidden');
};

const scrollInfoIntoView = () => {
  aboutInfo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

aboutBtnsContainer.addEventListener('click', e => {
  const currentBtn = e.target.closest('.about-btn');
  // Guard Clause
  if (!currentBtn) return;

  activateAboutContent(currentBtn);
  scrollInfoIntoView();
});

// Navbar & Footer Click About Link
aboutLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    activateAboutContent(document.querySelector('.about-j'));
    scrollInfoIntoView();
  });
});

// Footer Date
const date = (document.querySelector('.date').innerHTML =
  new Date().getFullYear());
