/////////////////////////////////////
// Working with numbers
const a = 0.1 + 0.2;
const b = 0.3;
console.log(a == b); // false ?

// Number
console.log(Number("20"));
console.log(+"20");

// ParseInt
console.log(Number.parseInt("30px")); // result -> 30
console.log(Number.parseInt("e20px")); // result -> NaN

// Regex is the second argument -> it's remove some bugs same times, if we working with numbers then the second argument is 10, and if we working with binary then the second argumen is 2 and the result is completely defferent

console.log(parseInt("200.20px", 10)); // result -> 200
console.log(parseInt("2002.0px", 10));

// ParseFloat
console.log(Number.parseFloat("2.2px")); // result -> 2.2
console.log(parseFloat("200.10rem"));

// SQRT
console.log(Math.sqrt(2 ** 10));
console.log(Math.sqrt(10 ** (1 / 2)));

// Max
console.log("--------Max---------");
console.log(Math.max(1, 20, 30, 40));
console.log(Math.max(1, 20, 30, "40")); // also work with string
console.log(Math.max(1, 20, 30, "40.1px")); // can't work with .values
console.log(Math.max(1, 20, 30, Number.parseFloat("200.1pxs")));

// Min
console.log("--------Min---------");
console.log(Math.min(1, 20, 30, 40));
console.log(Math.min(1, 20, 30, "40"));
console.log(Math.min(1, 20, 30, "40.1px"));
console.log(Math.min(1, 20, 30, Number.parseFloat("200.1pxs")));

// PI
console.log(Math.PI ** Math.sqrt(Number.parseFloat("10px") ** 2));

// Random
console.log(Math.random() * 6); // retun -> .00208982....
console.log(Math.trunc(Math.random() * 6) + 1); // return -> 1,2,4,6,1,....

// 1 -> Get the max values
const GetMaxValue = function (max, min) {
  const ResultData = Math.floor(Math.random() * (max - min) + 1) + min;
  console.log(ResultData);
};

GetMaxValue(10, 20);

// Rounding
console.log(Math.trunc(1.6)); // 1
console.log(Math.floor(1.6)); // 1
console.log(Math.ceil(1.5)); // 2
console.log(Math.ceil(1.1)); // 2

// toFixed
console.log(Math.floor(10.2).toFixed(0)); // return -> string
console.log((10.0).toFixed(2)); // .00
console.log((10.0).toFixed(1)); // .0

/////////////////////////////////////////////////
// REMAINDER OPERATOR

console.log(10 % 3); // 10/3 -> 3 * 3 = 9 , 10 - 9 -> 1
console.log(5 % 3); // 5/3 -> 3 * 1 = 3, 5 - 3 -> 2

//////////////////////////////////
// TAST
// Changet the even note color
// CHECK THE EVEN NUMBER

const n = (num) => num % 2 === 0;
console.log(n(200));
console.log(n(120));
console.log(n(13));

const Demo = document.querySelector(".Demo");
const ar = [...Demo.children];
ar.forEach((el, idx) => {
  if (idx % 2) {
    el.style.color = "red";
  }
});

///////////////////////////////////
// BIG INT
console.log(12212121213121212312321);
console.log(12212121213121212312321n);
console.log(BigInt(12212121213121212312321));

///////////////////////////////////
// INTERNATIONALIZAG DATE

const formateMyDate = function () {
  const now = new Date();
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  // Intl Date Formate
  const properDate = Intl.DateTimeFormat("en-US", option).format(now);
  console.log(properDate);
};

formateMyDate();

// setTimeOut -> Run ones
// setTimeout(() => {
//   formateMyDate();
// }, 1000);

// setIntervel -> run every , 1000 sec
// setInterval(() => {
//   formateMyDate();
// }, 1000);

{
  let a = 10;
  const timer = setInterval(() => {
    console.log((a += 5));

    if (a > 30) {
      clearInterval(timer);
    }
  }, 200);
}
