// Execution Context And Execution Stake
//////////////////////////////////////////

/*

Every thing in java script happens inside an execution context

Execution context is like a big box and a container there the holl java script is executed 

Execution context there are two type components over there

1 - Memory -> Variable Enviroment 

in the memory component this is the place the holl function variables and others store like key and value pair

2 - code -> Thread of Execution

in thread of execution the code will executed line by line

Java Script is a Synchronous single-threaded language.

Whats that's mean ?

Java Script Executed one commend at the time like ( Synchronous way ).

/////////////////////////////////////////////
Global Execution Context -> Java Script engin create the global Execution Context before it starts to execute any code

The Gobale Execution Context by default created by browser and the A new Execution Context created every time a funtion is executed.


Execution Stack -> Calling Stack ->  Execution stack also known as (calling stack) is a stak with a LIFO ( Last in, first out ) structure, which is used to store all the execution context created druing the code executio

*/

// const a = function () {
//   console.log('this is a');
// };

// const b = function () {
//   console.log('this is b');
//   a();
//   console.log('some other code');
// };

// const c = function () {
//   console.log('this is c');
//   b();
// };

// c();

// const d = function (x, y) {
//   console.log(x, y);
// };

// const b = function (a, b) {
//   d(a, b);
// };

// b(1, 2);
