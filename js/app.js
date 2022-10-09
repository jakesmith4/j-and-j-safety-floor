'use strict';

// Height Of Open Mobile Navbar = 224px

// Vars
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const slides = document.querySelectorAll('.slide');
const slideBtnContainer = document.querySelector('.slide-btn-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

// TOGGLE MOBILE NAVBAR
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
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
  timer = setInterval(moveSlider, 4000);
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
let timer = setInterval(moveSlider, 4000);

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
