"use strict";

/////////////////////////
// Default parameters
const bokings = [];

const GetSeatFunction = (seat = 1, passenger = 1, price = passenger * 100) => {
  const orderData = {
    passenger,
    price,
    seat,
  };

  bokings.push(orderData);
};

GetSeatFunction("H1EE2");
console.log(bokings);

//////////////////////
// closer
const greding = function (greding) {
  return function (name) {
    console.log(`${greding}! ${name}`);
  };
};

// both are same
greding("hey")("karan");
const greed = greding("hey");
greed("Dheeraj");

// in arrow function
const greedinFirst = (greeding) => (name) => console.log(`${greeding}! ${name}`);

greedinFirst("hello")("Aman");

//////////////////////////////////////
// function methods (call, apply, bind)

console.log("----- Call Method / Apply method / Bind method ------");

// 1 - object
const fightExOn = {
  flightNumber: "GF22E",
  flightCode: "Gl",
  book: [],

  // booking(passengerName, flightCode) {
  //   console.log(`${passengerName} booked seat on ${flightCode}, flight number is ${this.flightNumber}`);
  // },
};

// 2 - object
const flightExTw = {
  flightNumber: "33RGTY",
  flightCode: "FG",
  book: [],
};

const booking = function (passengerName) {
  this.book.push(`${passengerName} booked seat on ${this.flightCode}, flight number is ${this.flightNumber}`);
};

// assign the function into the new variable and use this many time as use wish
const bookFunction = booking;

// call method
//////////////////
bookFunction.call(fightExOn, "Dheeraj");
console.log(fightExOn);

bookFunction.call(flightExTw, "Aman");
console.log(flightExTw);

// apply method
/////////////////////
bookFunction.apply(flightExTw, ["Rohit"]);
console.log(flightExTw);

// Bind method -> bind method return the new function
//////////////////
const bindExOn = bookFunction.bind(fightExOn);
const bindExTw = bookFunction.bind(flightExTw);

bindExTw("Karna");
bindExOn("Sonu");

console.log(fightExOn);
console.log(flightExTw);

// partial application
const addTex = (num, tex) => num + num * tex;
console.log(addTex(0.1, 200));

const AddTex = addTex.bind(null, 200);
console.log(AddTex(0.1));

// Immediately Invoked function expressios

// IIFE
(function () {
  console.log("run once");
})();

(() => console.log("this will also run again"))();

////////////////////////////////////
// Closer -> A function has access to the variable environment (VE) of the execution context in which it was created

console.log("--------Closer---------");
const Bokker = function () {
  let someData = 10;

  return function () {
    someData++;
    console.log(someData);
  };
};

const BookerFirst = Bokker();
BookerFirst();
BookerFirst();

//////////////////////////////////////////
// Test

// the output will be [1,0,0,0] is the number
// if the string the answer is - 1,0,0,0

const poll = {
  question: "What is your beat programming language?",
  option: ["0: Javascript", "1: Python", "2: C++", "3: React"],

  answerArr: new Array(4).fill(0),

  // Your Code ->
  YourAnswer() {
    const ragisterAnswer = +prompt(`${this.question}\n${this.option.join(`\n`)}\n Entry your answer`);

    this.answerArr[ragisterAnswer]++;

    // Result
    console.log(this.answerArr);
    console.log(this.answerArr.join(" "));
  },
};

const button = document.querySelector(".button");

button.addEventListener("click", poll.YourAnswer.bind(poll));

////////////////////////////////
// IIFE
(function () {
  console.log("-----------this will run once----------");
})();

(() => console.log("-----------this will also run once----------"))();
////////////////////////////////

//////////////////////////////
//  Closer ->  A function can return another function in JavaScript. A function which is assigned to a variable is called function expression.

// 2 -> A function has access to the variable environment (ve) of the execution context in which it was created

const closer = function () {
  let a = 10;
  return function () {
    console.log(a + 10);
  };
};

const clFunc = closer();
console.dir(clFunc);
