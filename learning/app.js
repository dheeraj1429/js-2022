// const a = 2;
// // Math.exp => ax x => 2.7183
// console.log(Math.exp(a));
// console.log(Math.LN2);

// const a = 16;
// console.log(Math.PI * a);
// const c = 2 * 3.14 * a;
// console.log(c);

// PI => 3.14
// C = 2πr
// const circul = 16;
// const pi = Math.PI * 2;
// const r = circul / pi;
// const circulNew = pi * r;

// const a = -1.4;
// const b = 2.1;
// const c = -3.9;
// const d = 4.4;

// Math.abs return the absolute value
// console.log(Math.abs(a));
// console.log(Math.abs(b));
// console.log(Math.abs(c));
// console.log(Math.abs(d));

// const returnAbsValue = function (a, b) {
//    return a - b;
// };

// const value = returnAbsValue(4, 20);
// console.log(Math.abs(value));

// The Math.ceil() function always rounds a number up to the next largest integer.
// const a = 1.4;
// const b = 2.4;
// console.log(Math.ceil(a));
// console.log(Math.ceil(b));
// console.log(Math.ceil(-1.2));
// console.log(Math.ceil(-1.5));
// console.log(Math.ceil(-1.9));

// console.log(Math.floor(1.2));
// console.log(Math.floor(1.6));
// console.log(Math.round(1.2));
// console.log(Math.round(1.6));

// The Math.fround() method returns the nearest float representation of a number.

// console.log(Math.fround(1.2));
// console.log(Math.fround(1.3));

// const a = 1.2;
// const b = Math.fround(a);
// console.log(Number(b.toFixed(2)));

// const a = 2;
// const b = 4;

// console.log(Math.pow(a, b)); // -> (x to power y).

// for round values
// console.log(Math.round(1.4));
// console.log(Math.round(1.5));
// console.log(Math.round(1.9));
// console.log(Math.round(1.1));

// console.log(Math.trunc(1.233));
// console.log(Math.trunc(-1.233));

// Strings -------------------------------------------------------------------
// const str = 'this is the string';
// // console.log(str.charAt(1)); // -> index
// // console.log(str[1]); // -> same

// const str1 = str;
// console.log(str === str1);
// console.log(str.length);

// const str = 'this is me';
// console.log(str.charAt(1));
// console.log(str.charCodeAt(3));

// The codePointAt() method returns a non-negative integer that is the Unicode code point value at the given position.

// const str1 = '💀👋';
// console.log(str1.codePointAt(2));

// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));
// console.log(str2.concat(', ', str1));
// console.log(`${str1}, ${str2}`);

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const str1 = 'Cats are the best!';
// console.log(str1.length);
// console.log(str1.endsWith('!', 18));
// console.log(str1.startsWith('C'));
// console.log(sentence.includes('The'));
// sentence.includes('THE') ? console.log('this is good') : console.log('this is not good');
// console.log(sentence.indexOf('quick'));
// console.log(sentence.lastIndexOf('dog'));
// console.log(sentence.indexOf('dog'));

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// // const rag = /[A-Z]/g;
// const rag = /[a-z]/g;
// const found = paragraph.match(rag);
// console.log(found);
// const name1 = 'dheeraj';
// console.log(name1.padEnd(20, '.'));

// const str1 = '5';
// console.log(str1.padStart(2, '0'));

// const fullNumber = '2034399002125581';
// const sliceNumber = fullNumber.slice(10);

// console.log(sliceNumber.padStart(fullNumber.length, '*'));
// console.log('abc'.padStart(10, '*'));
// console.log('abc'.repeat(10));

// const text = 'Mr. Blue has a blue house';
// console.log(text.search('has'));
// console.log(text.indexOf('has'));
// console.log(text[text.indexOf('has')]);
// console.log(text.slice(text.search('has')));
// console.log(text.split(''));
// console.log(text.startsWith('Mr'));
// console.log(text.startsWith('.'));
// console.log(text.endsWith('Mr.'));
// console.log(text.endsWith('house'));

// const newStr = 10;
// console.log(typeof newStr.toString());
// console.log(newStr.valueOf());
// console.log(typeof newStr.valueOf());

// const ar = [1, 2, 3];
// const ar2 = ar;
// ar2.push(1100);

// console.log(ar);
// console.log(ar2);

// const obj = {
//    name: 'dheeraj',
// };

// const obj2 = obj;

// obj2.name = 'ritki';
// console.log(obj);
// console.log(obj2);

// const arr = [1, 2, 3];
// const obj = new Map([arr]);
// console.log(Object.assign({}, arr));
// const obj1 = arr.reduce((a, c) => ({ ...a, [c]: c }));

// console.log(arr);
// console.log(typeof obj);
// console.log(obj1);

// let objStore = {};
// for (let i = 0; i < arr.length; i++) {
//    objStore[i] = i;
// }

// console.log(objStore);

// const convertToObj = function (ar) {
//    const obj = {};

//    ar.forEach((el, i) => {
//       obj.i = el;
//    });
// };

// convertToObj(arr);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);

// const arr = [1, 2, 3];
// console.log(arr);
// // mute the orignal array
// console.log(arr.copyWithin(0, 1));

// arr.every((el, idx) => {
//    console.log(el == 1);
//    console.log(idx);
// });

// const arr = [1, 2, 3];
// console.log(arr.entries().next().value);
// console.log(arr.entries().next());

// const arr = [1, 2, 3];
// const obj = {};
// for (const [el, idx] of arr.entries()) {
//    obj[el] = idx;
// }

// console.log(obj);

// const arr = [1, 2, 3];
// console.log(arr.every((el) => el === 1));
// console.log(arr.some((el) => el >  1));

// const arr = [1, 2, 4];
// arr.fill(10, 2);
// const arrNew = [1, 2, 3, 4, 5, 5, 6, 7];
// arrNew.fill(4, 2);
// console.log(arr);
// console.log(arrNew);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result);

// const arr = [1, 2, 4];
// const newArr = arr.filter((el) => el === 2);
// const findArr = arr.find((el) => el === 2);
// console.log(arr.find((el) => el === 0));
// console.log(arr);
// console.log(newArr);
// console.log(findArr);

// console.log(arr.findIndex((el) => el == 4));
// console.log(arr.findIndex((el) => el === 5));

// const arr = [1, 2, 3, [3, [1, 4], 4]];
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr.flat(2));
// console.log(arr2.flat(3));
// const array1 = ['a', 'b', 'c'];
// array1.forEach((element) => console.log(element));

// console.log(Array.from('foo'));
// console.log(Array.from([1, 2, 3], (x) => x + x));

// const str = 'dheeraj';
// console.log(Array.from(str, (e) => e == 'h'));

// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// console.log(array1.findIndex((el) => el === 3));

// const arr = Array.isArray([1, 2, 3]); // true
// const arrNew = Array.isArray({ foo: 123 }); // false

// console.log(arr);
// console.log(arrNew);

// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join('-'));
// console.log(elements.keys().next().value);

// for (const [idx, el] of elements.entries()) {
//    console.log(el);
// }

// const arr = [1, 2, 3];
// const newArr = arr.map((el) => el * 2);
// console.log(newArr);

// const newArrTow = [];
// for (let i = 0; i < arr.length; i++) {
//    newArrTow.push(arr[i] * 2);
// }
// console.log(newArrTow);

// const arr = [1, 2, 3];
// const newValue = arr.reduce((acc, crv) => {
//    return acc + crv;
// });
// console.log(newValue);

// const array1 = [
//    [0, 1],
//    [2, 200, 3],
//    [4, 5],
// ];

// const newArr = array1.reduceRight((acc, crv) => acc.concat(crv));
// console.log(newArr);

// newArr.shift();
// console.log(newArr);
// console.log(newArr.reverse());
// console.log(newArr.slice(0, 4));
// console.log(newArr.some((el) => el % 2 === 0));

// const sortArr = newArr.sort((a, b) => a - b);
// console.log(sortArr);
// console.log(newArr.sort());

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// console.log(months.sort());

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// console.log(Object.assign(target, source));

// const object1 = {
//    a: 'somestring',
//    b: 42,
// };

// console.log(Object.values(object1));

// const obj = {
//    name: 'dheeraj',

//    getName() {
//       return this.name;
//    },
// };

// console.log(obj.getName());

// console.log(Object.entries(obj));

// const obj = {
//    age: 22,
// };
// const newObj = obj;
// Object.freeze(obj);
// newObj.age = 20;
// console.log(obj);
// console.log(newObj);

// const entries = new Map([
//    ['foo', 'bar'],
//    ['baz', 42],
// ]);

// const obj = Object.fromEntries(entries);
// console.log(obj);

// const arr = [
//    [0, 1],
//    [1, 2],
// ];

// console.log(Object.fromEntries(arr));

// const object1 = {
//    a: 1,
//    b: 2,
//    c: 3,
// };

// console.log(Object.getOwnPropertyNames(object1));

// Destructuring assignment---------------------------------------------------->

// const obj = { a: 10, b: 20, c: 30, d: 40 };
// ({ a, b } = obj);
// console.log(a, b);

// const allFriendsName = ['rohan', 'ritik', 'karan'];
// const [x, ...others] = allFriendsName;
// console.log(x, others);

// const getDataFunction = function () {
//    console.log(arguments);
// };

// getDataFunction(10, 20);

// convert h1 to span
// const heading = document.createElement('h1');
// heading.textContent = 'hello';
// document.body.append(heading);

// const headData = document.querySelector('h1');
// const splitData = headData.textContent.split('');
// const div = document.createElement('div');
// document.body.append(div);

// splitData.forEach((el) => {
//    const span = document.createElement('span');
//    span.textContent = el;
//    console.log(span);
//    div.append(span);
// });

// headData.remove();

// let a, b;

// [a = 1, b = 3] = [1];
// console.log(a, b);

// const fun = function () {
//    return [1, 2];
// };

// const [a, b] = fun();
// console.log(a, b);

// Functions --------------------------------------------------------------------->

// const num = 10;

// const mulFunction = function (num) {
//    return num * num;
// };

// console.log(mulFunction(num));

// const mycar = { make: 'Honda', model: 'Accord', year: 1998 };

// mycar.getData = function () {
//    return (this.make = 'bmw');
// };

// mycar.getData();
// console.log(mycar);

// let numbers = [0, 1, 2, 5, 10];
// // Function returns: [0, 1, 8, 125, 1000].

// const map = function (f, a) {
//    let arr = [];
//    for (let i = 0; i != a.length; i++) {
//       arr.push(f(a[i]));
//    }
//    console.log(arr);
// };

// const mulFunction = function (a) {
//    return a * a * a;
// };

// map(mulFunction, numbers);

// let a;
// const fun = function () {
//    a = 10;
// };

// fun();
// console.log(a);

// var b;

// const a = function () {
//    b = 10;
// };

// a();
// console.log(b);

// Regular expressions -------------------------------------------------------->

/*

g - global 
i - case insensitive
m - muitiline
s - single-line (dotall)
u - unicode
y - sticky

*/

// java script event lisner ---------------------------------------------------->

// onafterprint -> The event occurs when a page has started printing, or if the print dialogue box has been closed

// print = function () {
//     alert('document print');
// };

// animationend -> The event occurs when a CSS animation has completed

// const animationDiv = document.querySelector('.animation_div');
// const animation = function () {
//     animationDiv.style.WebkitAnimation = 'mymove 4s ease 2';
//     animationDiv.style.animation = 'mymove 4s ease 2';
// };

// animation();

// animationDiv.addEventListener('webkitAnimationStart', function () {
//     console.log('animation start');
// });
// animationDiv.addEventListener('webkitAnimationIteration', function () {
//     animationDiv.style.backgroundColor = 'red';
//     console.log('animation repert');
// });
// animationDiv.addEventListener('webkitAnimationEnd', function () {
//     animationDiv.style.backgroundColor = 'blue';
//     console.log('animation end');
// });

// onbeforePrint -> the event is fire when the user print the documnet. The event occurs when a page is about to be printed

// onbeforeunload -> The onbeforeunload event occurs when the document is about to be unloaded.

// function leave() {
//     alert('leave the page');
// }
