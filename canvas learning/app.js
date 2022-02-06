'use strict';

// get the canvas
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

// for window with and height
const width = window.innerWidth;
const height = window.innerHeight;

// set the canvas height and width
canvas.width = width;
canvas.height = height;

// for windo rezie
window.addEventListener('resize', function () {
   canvas.width = width;
   canvas.height = height;
});

const position = {
   x: undefined,
   y: undefined,
};

canvas.addEventListener('mousemove', function (e) {
   position.x = e.x;
   position.y = e.y;
});

// create a sape in canvas
const drowShape = function () {
   ctx.strokeStyle = 'red';
   ctx.beginPath();
   ctx.arc(position.x, position.y, 40, 0, Math.PI * 2);
   ctx.fill();
   ctx.stroke();
};

const animation = function () {
   // ctx.fillRect(0, 0, canvas.width, canvas.height);
   drowShape();
   requestAnimationFrame(animation);
};

animation();
