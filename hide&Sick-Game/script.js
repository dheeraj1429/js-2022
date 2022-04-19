"use strict";

// ELements
const rocks = document.querySelectorAll(".rock");
const GameRocks = document.querySelector(".GameRocks");
const cartoon = document.querySelectorAll(".cartoon");
const score = document.querySelector(".score");
const heading = document.querySelector(".heading");
const youScoreLeft = document.querySelector(".youScoreLeft");

// left score
let leftScore = 0;
let totalTime = 5;
youScoreLeft.textContent = "try - " + leftScore;

// Genrate random color
const randomInt = (max, min) => {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};

const randomColorGen = function () {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
};

const randomColorFunc = function () {
  setInterval(() => {
    heading.style.color = `${randomColorGen()}`;
  }, 100);
};

// if the use click another rock then remove first one
const removeCartoonStyle = function () {
  cartoon.forEach((item) => {
    item.style.top = "0px";
  });
};

rocks.forEach((elm) => {
  elm.addEventListener("click", function (e) {
    leftScore++;

    youScoreLeft.textContent = "try - " + leftScore;

    if (leftScore == totalTime) {
      // game over notification
      GameRocks.remove();
    }

    removeCartoonStyle();
    // 1 - select the rock
    const target = e.target;

    // genrate radom number
    const randomNumber = Math.trunc(Math.random() * 4 + 1);

    // grab the dom element
    const cartoonElem = document.querySelector(`.rock-${randomNumber}-cartoon`);

    // 3 - change the cartoon position using style
    cartoonElem.style.top = "-90px";

    const classAr = [...target.classList];
    const classArSplit = +classAr[1].split("-")[1];

    if (classArSplit === randomNumber) {
      // changet the cartoon src
      // change the score text
      score.textContent = "Yaahhh!!!!";
      // Change the heading color
      randomColorFunc();

      this.removeEventListener("click", function () {
        console.log("remo");
      });
    }
  });
});
