"use strict";

// get the element
const SliderContainer = document.querySelector(".SliderContainer");
const slider = document.querySelectorAll(".slider");
const sliderOne = document.querySelectorAll(".sliderOne");

// Dots Element div
const SliderButtonTopToButton = document.querySelector(".SliderButtonTopToButton");
const SliderLeftToRight = document.querySelector(".SliderLeftToRight");

let currentSliderTopBottom = 0;
let currentSliderLeftRight = 0;

// set dots top to bottom
const showDotsTopToBottom = function (slider, insert) {
    slider.forEach((el, i) => {
        const html = `<i class="fas fa-circle dotsTopSlide" id=${el.id}></i>`;

        insert.insertAdjacentHTML("beforeend", html);
    });
};

// Set dots left to right
const showDotsLeftToRight = function (slider, insert) {
    slider.forEach((el, i) => {
        const arELm = [...el.classList];

        const html = `<i class="fas fa-circle dotsLeftToRight ${arELm[1]}" id=${el.id}></i>`;

        insert.insertAdjacentHTML("beforeend", html);
    });
};

// top to bottom
showDotsTopToBottom(slider, SliderButtonTopToButton);

// left to right
showDotsLeftToRight(sliderOne, SliderLeftToRight);

// grab the dots elements from the dom
const dotsTopSlide = document.querySelectorAll(".dotsTopSlide");
const dotsLeftToRight = document.querySelectorAll(".dotsLeftToRight");

dotsTopSlide.forEach((item) => {
    if (item.id == 0) {
        item.classList.add("activeDot");
    }
});

// Set slide
const setSliderPositionOne = function (slider, position) {
    slider.forEach((el, i) => {
        el.style.transform = `translate${position}(${100 * el.id}%)`;
    });
};

// set slider position X and Y
setSliderPositionOne(slider, "Y");

// Slider X position
const setSliderPositionTwo = function () {
    sliderOne.forEach((item) => {
        const ar = [...item.classList];

        item.style.transform = `translateX(${100 * ar[1]}%)`;
    });
};

setSliderPositionTwo();

// Removing the dots class
const removeDotsClass = function (target) {
    target.forEach((item) => {
        item.classList.remove("activeDot");
    });
};

// Change slider position
const changeSlidePosition = function (slider, position, value) {
    slider.forEach((el, i) => {
        el.style.transform = `translate${position}(${100 * (i - value)}%)`;
    });
};

// Removing Upperyear class
const removingUpperLayr = function (slider) {
    slider.forEach((item) => {
        item.classList.remove("upperLayer");
    });
};

// Adding class
const addELemClass = function (slider) {
    slider.forEach((item) => {
        item.classList.add("upperLayer");
    });
};

// slode top to bottom
dotsTopSlide.forEach((el) => {
    el.addEventListener("click", function (e) {
        removeDotsClass(dotsTopSlide);

        removeDotsClass(dotsLeftToRight);

        removingUpperLayr(sliderOne);

        currentSliderTopBottom = e.target.id;

        changeSlidePosition(slider, "Y", currentSliderTopBottom);

        addELemClass(slider);

        e.target.classList.add("activeDot");
    });
});

// slide left to right
dotsLeftToRight.forEach((item) => {
    item.addEventListener("click", function (e) {
        removeDotsClass(dotsLeftToRight);

        removeDotsClass(dotsTopSlide);

        removingUpperLayr(slider);

        const arELm = [...e.target.classList];

        currentSliderLeftRight = arELm[3];

        changeSlidePosition(sliderOne, "X", currentSliderLeftRight);

        addELemClass(sliderOne);

        e.target.classList.add("activeDot");
    });
});
