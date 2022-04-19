// how java script work ?
//////////////////////////////////////

/*
//////////////////////////////////
js code -> parser ( break the code into the tokens )  -> AST ( Abstract Syntax Tree ) -> Interperter ( Compiled before it run, read over the javascript code, interperts each line, and run it ) -> Profiler -> Compiler -> Optimized Code -> 0101010 form


interpreter -> an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.

JIT Compiler -> JUST IN TIME Compilation

This is where a call stack and a Memory heap comes in. We need the memory heap as a place to store and write information because at the end of the day all programs just read and write operations — that is to allocate, use and release memory.


The call stack helps us keep track of where we are in the code so that we can run the code in order.

We need a place to store and write information — data for our app(variables, objects, etc..)
We need to keep track of what's happening to our code line by line.

what is the memry head -> the memery heap is like a store where we store our data like variables, information, because at the end of the day all programs just read and write operations

Javascript is a single threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next. It's synchronous



*/

/*
////////////////////////////////////////
EXECUTION CONTEXT AND GLOBAL EXECUTION CONTEXT

EXECUTION CONTEXT -> The enviroment in which our code is executed and is evaluated is excecution context.

EXECUTION CONTEXT -> GLOBAL EXECUTION CONTEXT

GLOBAL EXECUTION CONTEXT -> Java script engine create the global execution context before it starts to executed any pease of code.


whene the function is executed the new executed context created ( for executed the pease of code from the function ) 


The Global Execution context is same like other Execution Context deffrence is -> Global Execution Context is by default created by browser and the Execution Context created when the function is executed

EXECUTION STAKE -> Execution stack also known as (calling stack) is a stak with a LIFO ( Last in, first out ) structure, which is used to store all the execution context created druing the code execution

CALL STAKE && MEMORY HEAP

const a = function () {
 console.log('this is a');
};

const b = function () {
 console.log('this is b');
 a();
 console.log('some other code');
};

const c = function () {
 console.log('this is c');
 b();
};

c();


EXECUTION CONTEXT -> VARIABLE OBJECT, SCOPE CHAIN, 'THIS' VARIABLE

Execution Context :-

1 - Creation Phase
////////////////////////////////

Variable object are created.

-> for each function a property is created in the variable object. Which is pointing to that function.

-> for each varible a property is created in the variable object Which is then set to undefiend.

//////////////////////////////
// Hoisting -> Hoisting in JavaScript, Function declaration and variable are moved to the top of thire scope before the code exectuio
/////////////////////////////

*/

// Function Hoisting
//////////////////////////////////////////
// console.log(a(1, 2));

// Function Declaration
// function a(x, y) {
//  return x + y;
// }

// data();
// Function Exprestion
// const data = function () {
//  console.log('data');
// };
// data();

// Variable Hoisting
//////////////////////////////////////////

// console.log(a);
// var a; // hoisting work with var not (let, and const)
// a = 10;

// var b = 10;
// console.log(b);
// b = 20;

/*
Scope chains are created 

Schope => Scope is the way of accessing variables, functions, and objects in some particular part of your code during runtime.

url -> https://medium.com/@aastha6348/understanding-scopes-and-scope-chain-in-javascript-4d87f7a4b144

Global Scope -> Variable defiend outside of the function is global scope, Aslo there is only on Global scope is a your javasript document file, if we difiend the variable into the globale scope than we csn use the variable anyware in out code,..

<!-- Example  --->
//Gloabl Variable
var num1 = 10;
var add = function(){
  // Local Variable
  var num2 = 20;
  console.log(num1);  \\ prints 10
  console.log(num2); \\ prints 20
// Global Variable Accessible inside function 
    return num1 + num2
}
console.log(num1); \\ prints 10
console.log(num2); \\ undefined error
console.log(add());\\ Print 30


Local Scope -> Variables defined inside a function are in local scope.And they have a different scope for every call of that function. Also, Each function when invoked creates a new scope. So there is a Function scope also.

<!-- Example  --->
// Scope A 
var Function1 = function () {   
    // Scope B   
    var Function2 = function () {     
        // Scope C   
    }; 
};

Function Scope -> The Local Scope is like the function scope

<!-- Example  --->
const fun = function () {
  // function scope
  const a = 10;
}

fun();


this -> take a loke at the  how js work file

'this' variable ( where the this keyword point )

2 - Execution Phase
////////////////////////////////


Current Exection context run the code line by line


string splite

const names = 'Harry, Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand';

const nameList = names.split(/[,.?;\s]+/);

console.log(nameList);

const str = 'var a = 5';
console.log(str.split(/\s+/));

Inline caching
const getData = function (data) {
 return `${data.firstName} ${data.lastName}`;
};

const obj = {
 firstName: 'dheeraj',
 lastName: 'rawat',
};

getData(obj);

Call Stack && Memory Heap

learning -> https://medium.com/@allansendagi/javascript-fundamentals-call-stack-and-memory-heap-401eb8713204

1 - We need a place to store and write information --- data for out app ( variables, array, strings,.... )

2 - We need to keep track of waht's happeining to our code in line by line.

The Call Stack helps us kepp track of where we are in the code so that we can run the code on order.

The memory Heap a free store (the large place) which is js v8 proide for use, we can store any kind of data into the memory Heap

every time we call the memoryFunc is goes to the memory Heap and find the memoryFunc and return it

const Data = function () {
 let a = 10;
 return function () {
  return a + 1;
 };
};

Data();

anonymous -> Global Execution Context

WEB API -> https://developer.mozilla.org/en-US/docs/Web/API

console.log(1);
setTimeout(() => {
 console.log(2);
}, 1000);
console.log(3);

resutl -> 1, 3 , 2
*/
/////////////////////////////////////

// Memory heap = The heap is a diffrent space for storing data where javascript stores objects and funtion, We need a place to store and write information — data for our app(variables, objects, etc..)

// We need to keep track of what's happening to our code line by line.

////////////////////////////////////
/*
Every time a function was called a new execution context created into the call stack

every time we just run a code is a part of execution context.

GLOBAL EXECUTION CONTEXT = THE FIRST EXECUTION CONTEXT INTO THE CALL STACK

LEXICAL SCOPING - THE INNER FUNTION CAN GET THE ACCESS TO THEIR PARENT FUNTION VARIABLES BUT THE PARENT FUNCTION CAN'T

HOISTING = HOISTING IS THE BEHAVIER TO ( VARIABLES AND FUNTION DECALARTION ) MOVE TO THE TOP OF THE RESPACTIVE ENVIROMENTS

*/

// QUESTION ?

// var favouritFood = 'grapes';

// var foodThought = function () {
//   console.log('Original favourit food: ' + favouritFood);

//   var favouritFood = 'shushi';

//   console.log('New favourit food ' + favouritFood);
// };

// foodThought();

/*

THIS = ALONE, THIS REFERS TO THE GLOBAL OBJECT.
IN A RAGULAR FUNCTION, THIS REFERS TO THE GLOBAL OBJECT
IN A METHOD, THIS REFERS TO THE OWNER OBJECT.S

*/

// DATA TYPES IN JAVA SCRIPT
/*

PREIMITIVE DATA TYPES  = NUMBERS STRINGS BOOLEAN UNDEFINED NULL SYMBOL

NON PRIMITVE DATA TYPE, REFRENCE DATA TYPE   = OBJECT

The isArray method determines whether an object is an array.

*/

// const arr = [1, 2, 3];
// console.log(Array.isArray(arr));

/*

pass by values and pass buy reference

pass by value - in the pass by value, parameters passed and an argument create its own copy. so any changes made indid the fution is made to the copied value not the original value.

pass by reference - In pass by reference, funtion is calles by directly passing the referece/address of the variable as an argument. so changing the value inside the function also change the original value.

*/

// let a = 10;
// const data = function (e) {
//   return (e = 20);
// };

// console.log(data(a));
// console.log(a);

/*

FUNCTION IS FIREST CLASS CITIZENS - A PROGRAMMING LANGUAGE IS SAID TO HAVE FIRST-CLASS FUNTION WHEN FUNCTION IS THE LANGUAGE ARE TREATED LIKE ANY OTHER VARIABLE.

IN JAVA SCRIPT WE CAN ASIGN A FUNTION TO A VARIABLE.


Bind Methods => by this method, we can bind to a object into the common function so that the function gives diffrentes results when its need.

const objOne = {
  name: 'dheeraj',
  age: 21,
  place: 'delhi',
};

const objTwo = {
  name: 'karan',
  age: 25,
  place: 'agra',
};

const getDataFunction = function () {
  console.log(`hi my name is ${this.name} am from ${this.place}, and my age is ${this.age}`);
};

const firstBind = getDataFunction.bind(objOne);
const secondBind = getDataFunction.bind(objTwo);

firstBind();
secondBind();
*/
