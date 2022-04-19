// remove 2, 4, 6 from the array
// resutl [1, 3, 5]
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] % 2 == 0) {
//           arr.splice(i, 1);
//      }
// }
// console.log(arr);
// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
// myFunction(new Set('12345'), '3') -> new Set(['1', '2', '4', '5'])
// myFunction(new Set([1, 2, 3]), 1) -> new Set([2, 3])
// const set = new Set([1, 2, 3]);
// const randomFunction = function (set, value) {
//      for (const el of set) {
//           if (el == value) {
//                set.delete(value);
//           }
//      }
//      return set;
// };
// randomFunction(set, 1);
// console.log(set);
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
// const setFunction = function (set) {
//      const ar = [...set];
//      return ar;
// };
// console.log(setFunction(new Set([1, 2, 4, 5, 6])));
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// const equlFunction = function (a, b) {
//      if (a === b) return true;
//      else return false;
// };
// console.log(equlFunction(2, 2));
// console.log(equlFunction(2, 3));
// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number
// const myFunction = function (obj) {
//      const a = (obj.number / 100) * obj.percentage;
//      return a;
// };
// console.log(myFunction({ number: 100, percentage: 50 }));
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
// const arrSort = [1, 5, 10, 124, 12, 1];
// const sortArray = arrSort.sort((a, b) => {
//      if (a < b) return a - b;
// });
// const arr = [1, 4, 2, 4, 5, 62, 10];
// const sortArr = arr.reduce((acc, val) => {
//      let ind = 0;
//      while (ind < arr.length && val > arr[ind]) {
//           ind++;
//      }
//      acc.splice(ind, 0, val);
//      return acc;
// }, []);
// console.log(sortArr);
// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
// const setFunction = function (set, arr) {
//      const allValues = [...set, ...arr];
//      return new Set(allValues);
// };
// console.log(setFunction(new Set([1, 2, 3]), [4, 5, 6]));
// console.log(setFunction(new Set([1, 2, 3]), [2, 3]));
// remove duplicates values from the array without using new Set() reduce()
// const arr = [1, 2, 3, 4, 2, 3, 1];
// const data = arr.filter((a, b) => arr.indexOf(a) === b);
// console.log(data);
// change the str into the array and loop the array and change the string values into the array
// const str = '1234567';
// const newArr = Array.from(str);
// const data = newArr.map((el) => +el);
// console.log(data);
// const arr = [1, 2, 3, 4, 2, 3, 1];
// let a = [];
// for (const i of arr) {
//      if (a.indexOf(i) == -1) {
//           a.push(i);
//      }
// }
// console.log(a);
// const a = '12345678910';
// const c = Array.from(a, Number);
// const d = [];
// for (let i = 9; i < c.length; i++) {
//  d.push(c[i]);
// }
// c.splice(-2);
// c.push(+d.join(''));
// console.log(c.flat());
// const str = ['a', 'b', 'c', 'd']; // result -> bcde
// let arr = 'abcdefghijklmnopqrstuvwxyz';
// const a = Array.from(arr);
// const rs = [];
// a.forEach((el, i) => {
//  str.forEach((item, idx) => {
//   if (el == item) {
//    const d = i + 1;
//    rs.push(arr[d]);
//   }
//  });
// });
// const result = rs.join(' ');
// console.log(result);
// const btn = document.querySelector('.btn');
// const btnone = document.querySelector('.btnone');
// btn.addEventListener('click', function () {
//  document.documentElement.setAttribute('data-theme', 'dark');
// });
// btnone.addEventListener('click', function () {
//  document.documentElement.setAttribute('data-theme', 'light');
// });
// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
// 10, 100 -> b/a -> .1
// 2, 3 -> a * b -> 6
// const renderFunction = function (a, b) {
//  if (b % a == 0) {
//   return b / a;
//  } else {
//   return b * a;
//  }
// };
// console.log(renderFunction(10, 100));
// console.log(renderFunction(2, 3));
// const str = ['help', 'me'];
// const renderFunction = function (str) {
//  const data = str.reduce((acc, crv) => {
//   if (acc.length > crv.length) return acc;
//  });
//  return data;
// };
// console.log(renderFunction(str));
// const arr = [true, false, false, true, false]; // -> 2
// const renderFunction = function (arr) {
//  let count = 0;
//  arr.map((el) => {
//   if (el == true) {
//    count++;
//   }
//  });
//  return count;
// };
// renderFunction(arr);
// const renderFunction = function (arr) {
//  const ar = [];
//  arr.map((el) => {
//   if (el == true) {
//    ar.push(el);
//   }
//  });
//  return ar.length;
// };
// console.log(renderFunction(arr));
//////////////////////////////////////////////
/*
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
*/
// const arr2 = [10, 4, 24, 17];
// const renderFunction = function (arr) {
//   const ar = Array.from(arr.join('')).map((el) => +el);
//   if (ar.includes(7)) {
//     return 'Boom!';
//   } else {
//     return 'None of the items contain 7 within them.';
//   }
// };
// renderFunction(arr2);
// Write a function that converts hours into seconds.
// const howManySeconds = function (hour) {
//   const min = Math.floor(hour * 60 * 60);
//   return min;
// };
// howManySeconds(2);
// Create a function that takes the age in years and returns the age in days.
// calcAge(65) ➞ 23725
// year =  1 365day
// const calcAge = function (age) {
//   return 365 * age;
// };
// calcAge(65);
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// const ar = [];
// const num = function (a) {
//   for (let i = 1; i <= a; i++) {
//     ar.push(i);
//   }
//   return ar.reduce((acc, crv) => acc + crv);
// };
// console.log(num(4));
/////////////////////////////////////////////////////////////////////////////////////////
// Debouncing in Javascript
// const serchInput = document.querySelector('.serchInput');
// const dbFUnc = function () {
//   console.log('hi from the dbounce');
// };
// let timer;
// const dbounceFunction = function (fun, delay) {
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fun.apply(this, arguments);
//     }, delay);
//   };
// };
// serchInput.addEventListener('click', dbounceFunction(dbFUnc, 2000));
// a();
// function a() {
//   console.log('he');
// }
// function a() {
//   console.log('by');
// }
// Q - Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

// -------------------------------------------------------------------------
// Js Review

// interpreter vs compiler
