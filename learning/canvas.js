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

   // drow rectagle
   /*
   ctx.fillStyle = 'red';
   ctx.fillRect(100, 100, 200, 200);

   ctx.fillStyle = 'green';
   ctx.fillRect(400, 400, 200, 200);
   */

   // Drow A Line
   /*
   ctx.moveTo(400, 150); //mmoveTo(x,y) -> starting point of the line
   ctx.lineTo(0, 150); // lineTO(x,y) -> end point of the line
   ctx.lineWidth = 2; // line wigth
   ctx.strokeStyle = 'red';
   ctx.stroke(); // drop the stroke of the line
   */

   // Drow a complex line
   // ctx.beginPath();
   // ctx.moveTo(0, 0);
   // ctx.lineTo(100, 200);
   // ctx.lineTo(300, 0);
   // ctx.lineTo(0, 200);

   // ctx.stroke();

   // line cap

   // first line
   // ctx.beginPath();
   // ctx.strokeStyle = 'red';
   // ctx.lineWidth = 10;
   // ctx.lineCap = 'butt';
   // ctx.moveTo(400, 100);
   // ctx.lineTo(200, 100);
   // ctx.stroke();

   // // second line
   // ctx.beginPath();
   // ctx.strokeStyle = 'blue';
   // ctx.lineCap = 'round';
   // ctx.lineWidth = 10;
   // ctx.moveTo(400, 150);
   // ctx.lineTo(200, 150);
   // ctx.stroke();

   // // second line
   // ctx.beginPath();
   // ctx.strokeStyle = 'green';
   // ctx.lineWidth = 10;
   // ctx.lineCap = 'square';
   // ctx.moveTo(400, 200);
   // ctx.lineTo(200, 200);
   // ctx.stroke();
};
