"use strict";

const nextBtnElm = document.querySelector(".nextBtn"),
    prevButtonElm = document.querySelector(".prevButton"),
    progressBarStripElm = document.querySelectorAll(".progress_start_div"),
    numberDivElm = document.querySelectorAll(".number_div");

let currentElm = 0;

const loopFunction = function (element, elmClass, nature) {
    element.forEach((el, i) => {
        if (currentElm === i) {
            el.classList[nature](elmClass);
        }
    });
};

const nextFormFunction = function () {
    if (currentElm === progressBarStripElm.length || currentElm === numberDivElm.length) return;

    loopFunction(progressBarStripElm, "progress_start_div_active", "add");

    loopFunction(numberDivElm, "number_div_active", "add");

    if (currentElm === progressBarStripElm.length - 1) {
        numberDivElm[numberDivElm.length - 1].classList.add("number_div_active");
    } else {
        numberDivElm[numberDivElm.length - 1].classList.remove("number_div_active");
    }

    currentElm++;
};

const prevFormFunction = function () {
    if (currentElm === 0) return;

    currentElm--;

    loopFunction(progressBarStripElm, "progress_start_div_active", "remove");

    loopFunction(numberDivElm, "number_div_active", "remove");

    numberDivElm[numberDivElm.length - 1].classList.remove("number_div_active");
};

nextBtnElm.addEventListener("click", nextFormFunction);
prevButtonElm.addEventListener("click", prevFormFunction);
