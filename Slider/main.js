"use strict";

// get elemts
const slider = document.querySelector(".slider");
const sliders = document.querySelectorAll(".sliders");
const dotsDiv = document.querySelector(".dotsDiv");

// Btn
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

// current slide
let currentSlider = 0;
let activeDotClass = 0;
let maxSlide = sliders.length;

slider.style.overflow = "hidden";

// adding dots
const createDots = function () {
  sliders.forEach((el, i) => {
    const html = `
        <i class="fas fa-circle arrowDots" id=${i} ></i>
      `;

    dotsDiv.insertAdjacentHTML("beforeend", html);
  });
};

createDots();

const arrowDots = document.querySelectorAll(".arrowDots");

// changing the slide posotion
sliders.forEach((el, i) => {
  el.style.transform = `translateX(${100 * i}%)`;
});

// Chanding slider
const changingSlider = function () {
  sliders.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - currentSlider)}%)`;
  });
};

// Next button
arrowRight.addEventListener("click", function (e) {
  if (currentSlider === maxSlide - 1) {
    currentSlider = 0;
    changingSlider();
  } else {
    currentSlider++;

    changingSlider();
  }
});

// Prev Button
arrowLeft.addEventListener("click", function () {
  if (currentSlider === 0) {
    currentSlider = sliders.length - 1;
    changingSlider();
  } else {
    currentSlider--;
    changingSlider();
  }
});

// remove dots active class
const removeDotsClass = function () {
  arrowDots.forEach((item) => {
    item.classList.remove("activeDot");
  });
};

// get the dots
arrowDots.forEach((el) => {
  if (el.id == 0) {
    el.classList.add("activeDot");
  }

  el.addEventListener("click", function (e) {
    removeDotsClass();
    currentSlider = e.target.id;

    changingSlider();

    // change the action class from the dots
    e.target.classList.add("activeDot");
  });
});
