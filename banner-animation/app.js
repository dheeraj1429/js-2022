'use strict';
const scene = document.querySelector('.scene');

let a = 500;

const startFunction = function () {
   for (let i = 0; i < a; i++) {
      const stars = document.createElement('i');
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const size = Math.random() * 3;

      stars.style.left = `${x}px`;
      stars.style.top = `${y}px`;
      stars.style.width = `${size}px`;
      stars.style.height = `${size}px`;

      scene.appendChild(stars);
   }
};

startFunction();
