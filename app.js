"use strict";

const sliderContentDiv = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider img");
const sliderTwoImages = document.querySelectorAll(".sliderTwo img");

let x = 0;
const fps = 25;
const right = 0;

const sliderImageFun = function (target, position, rightPostion) {
    target.forEach((el, i) => {
        // el.style.right = rightPostion;

        el.style.transform = `translateX( ${position ? position : ""}${100 * i}%)`;
    });
};

sliderImageFun(sliderImages);
sliderImageFun(sliderTwoImages, "-", right);

function animate() {
    // perform some animation
    if (x > 500) {
        x = 0;
    } else {
        x++;

        // 1 * 100 - x
        // 100 * i + x

        sliderImages.forEach((el, i) => {
            el.style.transform = `translateX(${100 * i - x}%)`;
        });

        sliderTwoImages.forEach((el, i) => {
            el.style.transform = `translateX(${-(100 * i) + x}%)`;
        });
    }
    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}
animate();
