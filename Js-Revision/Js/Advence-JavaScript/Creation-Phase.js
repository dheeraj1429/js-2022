// Execution Context There is Two Phase

/*

1 - Creation Phase

Vaiable Object


Variable Object
1 - for Each funtion ( Function Declaration ) a property is created in the variable object. Which is pointing to that funtion

2 - For Each Variable a Property is created in the variable object. and set the varaiable value is undifiend


Hoisting - 1 and 2 is hoisting, Means Hoisting in javaScript mechanism where the variable and funtion declaration are moved into the top of thier scope before the code execution

Schope Chain

The Scope Chain is used to reslove the value of variable names in javascript

Scope Chain in java script is lexically Defined ( Where you write your function ), which means that can see what is the scope chain will be looking at the code

at the top of the scope chain is the global scope, which is the window object in the browser 

Lexical Scoping - a inner funtion can get access to thire parent funtion variables


'this' variable

The javascript this keyword refers to the object it belongs to.

alone, this refers to the global object
in a ragular function, this is refers to yh global object

In a methods this refers in a onwer object

In a function, in strict mode this is undifind

2 - Execution Phase

Current Execution context run line by line 

*/

// Hoisting
// var a;
// console.log(a);
// a = 10;

// data();

// function data() {
//  console.log('this is the data function');
// }

// console.log('d value ' + d);
// var d = 10;
// console.log('d value ' + d);

// function getData() {
//  console.log('d value ' + d);
//  var d = 20;
//  console.log('d value ' + d);
// }

// getData();

// Lexical Scoping

// var a = 'this';

// function sum() {
//   var b = 'hi';
//   console.log(a);

//   run();

//   function run() {
//     console.log(b);

//     three();
//   }
// }

// function three() {
//   var d = 'come';
//   console.log(d, b);
// }

// sum();

// use Strict

// 'use strict';

// function sum(a, b) {
//   add = a + b;
//   console.log(add);
// }

// sum(1, 2);
