// Array
////////////////////////////////////

const arr = ["a", "b", "c", "d"];

const arrNew = [{ id: 1 }, { id: 2 }, { id: 3 }];

// SLICE
const SliceArr = arr.slice(2); // remove (2) first element from the array and return the new array
console.log(arrNew.slice(2));
console.log(arrNew.slice(1, 2));
console.log(arr.slice(-3));
console.log(SliceArr);

// making a copy of the array
const CopyArray = arrNew.slice();
console.log(CopyArray);

// SPLICE
// Mute the original array
arr.splice(2);
arr.splice(-1);
console.log(arr);

// REVERCE
console.log(arrNew.reverse());

// CONCAT
const newConCatArr = arr.concat(arrNew);
console.log([...arr, ...arrNew]);
console.log(newConCatArr);

// JOIN
arrOne = ["a", "b", "c", "d"];
console.log(arrOne.join(" - "));

///////////////////////////////////////
// LOOP OVER THE ARRAY
const movements = [200, 100, 400, -200, -500, -100];

movements.forEach((el, index, array) => {
  //   if (el > 0) {
  //     console.log(`you diposit - ${el}`);
  //   } else {
  //     console.log(`you widtraw - ${Math.abs(el)}`);
  //   }

  el > 0 ? console.log(`${index + 1} : you diposit - ${el}`) : console.log(`${index + 1} : you widtraw - ${Math.abs(el)}`);
});

//////////////////////////////////////
// ForEach with map and set
console.log("---------MAP----------------");
const DemoMap = new Map([
  [1, "INDIA"],
  [2, "USA"],
  [3, "CHINA"],
]);

DemoMap.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// set
console.log("---------SET----------------");
const SetUniq = new Set(["INDIA", "USA", "CHINA"]);
SetUniq.forEach(function (_, value, map) {
  console.log(`${value}: ${value}`);
});

///////////////////////////////////////
// MAP, FILTER, REDUCE
console.log("------MAP FILTER REDUCE----------");
const ar = [1, 2, 3, 4, 5, 6];
let num = 1.2;
// MAP -> MAP RETURN THE NEW ARRAY

// WITH MAP
const arMap = ar.map(function (el) {
  return el * num;
});

ar.map(function (el, index, arr) {
  console.log(`${index + 1}: ${el}`);
});

// WITH FOR LOOP
for (const el of arMap) {
  console.log(el * num);
}

// WITH FOREACH
const someData = [];
arMap.forEach((el) => {
  return someData.push(el * num);
});

// SOME AND EVERY
//////////////////////////////
const arrDemo = [1200, 100, 300, -100, -500, 600];

// INCLUDE
console.log(arrDemo.includes(-500));

// retun true and false
// SOME
//////////////////////////////
console.log(arrDemo.some((el) => el > 0));

// EVERY
//////////////////////////////
console.log(arrDemo.every((el) => el > 0));

// FLAT AND FALTMAP
//////////////////////////////
const arrNested = [[100, 50, 10, 20], 9, 6, 7, [1, 4, 2]];
const arrNested2 = [[1, 2, [3, 4]], 5, 6, 7, [8, 9, 10]];
console.log(arrNested.flat());
console.log(arrNested2.flat(2));

//////////////////////////////
// SORTING

// WITH STRING
const strShort = ["a", "c", "d", "b"];
console.log(strShort.sort());

// WITH NUMBERS
const numOne = arrNested.flat();
console.log(numOne);

// return < 0 , a, b
// return > 0, b, a
const sortFunc = numOne.sort(function (a, b) {
  return a - b;
});

console.log(sortFunc);

// FILLING ARRAY

// Calling function into the array
const firstFuntion = function () {
  console.log("this is me first_function");
};

const functionArr = [firstFuntion()];

functionArr[0];
