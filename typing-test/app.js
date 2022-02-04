'use strict';

const paragraphInsertElm = document.querySelector('.para_insrt');
const InputUserContentElm = document.querySelector('.inputUserContent');
const resultPara = document.querySelector('.resultPara');
const yourResult = document.querySelector('.yourResult');
const timerParaElm = document.querySelector('.timer_para');
const startBtn = document.querySelector('.startBtn');

const userTypedVauls = [];
let total = [];
let play = false;
let userTypedString = '';
let time = 60;

const typedPara = [
   {
      data: `The earliest known appearance`,
   },
];

// Insert the data into the dom elem
paragraphInsertElm.textContent = typedPara[0].data;

// Check the user typed values
const userIntputValue = function (e) {
   // get the user value
   let value = e.target.value;

   if (e.keyCode == 32) {
      // store the user values
      userTypedVauls.push(value);
      userTypedString += value;
      // empty the input fild
      InputUserContentElm.value = '';

      campareUserString();
   }
};

const campareUserString = function () {
   const paraDataAr = typedPara[0].data.split(' ');

   if (paraDataAr.length == userTypedVauls.length || time === 0) {
      // convert the all values into the aray
      const paraAr = typedPara[0].data.split(' ');
      const usetTypeStringAr = userTypedString.split(' ');

      // campare evry single letter
      paraAr.forEach((el) => {
         usetTypeStringAr.forEach((item) => {
            if (item === el) {
               total.push(el);
            }
         });
      });

      // convert camper stings into the persentage
      const persentageData = `${((total.length / paraDataAr.length) * 100).toFixed(2)}%`;

      // Show the result
      resultPara.style.display = 'block';
      yourResult.textContent = persentageData;
   }
};

// ---
const StartTimerFunction = function () {
   let interval;
   if (!play) {
      startBtn.textContent = 'stop';
      play = true;
      interval = setInterval(() => {
         time--;
         timerParaElm.textContent = time;

         if (time <= 0) {
            // Stop the timer
            clearInterval(interval);
         }
      }, 1000);
   } else {
      play = false;
      startBtn.textContent = 'Start';
      clearInterval(interval);
   }
};

// Events
InputUserContentElm.addEventListener('keydown', userIntputValue);

// Start timer when the user is click the button
startBtn.addEventListener('click', StartTimerFunction);
