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
