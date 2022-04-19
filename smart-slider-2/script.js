"use strict";

const MainDiv = document.querySelector(".MainDiv");
const imges = document.querySelectorAll(".sliderImgs");
const dotsSlider = document.querySelector(".dotsSlider");

// btn
const btn = document.querySelector(".btn");

// Current slider
let currentSlider = 0;
let maxSlider = imges.length;

// Changin the slider images positionX
imges.forEach((el, i) => {
  el.style.transform = `translateX(${100 * i}%)`;

  // render the dots
  const html = `<i class="fas fa-circle dots-Icons" id=${i}></i>`;

  dotsSlider.insertAdjacentHTML("beforeend", html);

  if (i == 0) {
    el.classList.add("active");
  }
});

// remove the slider class
const removeSliderClass = function () {
  imges.forEach((el) => {
    el.classList.remove("active");
  });
};

// change slider function
// const changeSlider = function () {
//   imges.forEach((item, i) => {
//     item.style.transform = `translateX(${100 * (i - currentSlider)}%)`;
//   });
// };

const addClassELem = function () {
  // adding class to current slider
  // grab elem from the dom
  const domELemSlider = document.querySelector(`.slider-${currentSlider}-tab`);
  domELemSlider.classList.add("active");
};

const ChangeSliderPosition = function () {
  removeSliderClass();

  // if the slider reach the last elem the restart the slider
  if (currentSlider == maxSlider - 1) {
    currentSlider = 0;

    // changeSlider();

    addClassELem();
  } else {
    // update the slider count
    currentSlider++;

    // changeSlider();

    addClassELem();
  }
};

const dotsIcons = document.querySelectorAll(".dots-Icons");

dotsIcons.forEach((item) => {
  item.addEventListener("click", function (e) {
    currentSlider = e.target.id;

    ChangeSliderPosition();
  });
});
