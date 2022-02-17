'use strict';

window.onload = function () {
   const canvas = document.createElement('canvas');
   canvas.setAttribute('id', 'canvas');

   const ctx = canvas.getContext('2d');

   document.body.appendChild(canvas);

   const width = window.innerWidth;
   const height = window.innerHeight;

   canvas.width = width;
   canvas.height = height;

   window.addEventListener('resize', function () {
      canvas.width = width;
      canvas.height = height;
   });

   ctx.beginPath();
   ctx.arc(150, 150, 100, 0, Math.PI * 2);
   ctx.strokeStyle = 'red';
   ctx.stroke();
};
