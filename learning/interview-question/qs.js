// queston 1 - Why do we call the javascript as dynamic language ?

// ans - javascript is a dynamic language means data type of the variables can change during the runtime. and the javascript is not throw any error is we using the var and let keyword to store the variable.

var a = 10;
a++;
// console.log(typeof a);
a = "thi is me a string..";
// console.log(typeof a);

// question 2 - How does javascript determine data type ?

// ans - Javascript determines data type depending on the value assigned.

// var z = {};
// console.log(typeof z);

// question 3 - how to check the data type of the variable

// ans - we can use the typeof funtion to check the data type of the variable

const n = 10;
// console.log(typeof n);

// question 4 - what are different datatypes in javascript ?

// ans - primitive data type and object

// primitive data type -> string, number, null, undifiend, boolean, big int, symbol and object, the most use datatype in javascript is string, numbers, null, undifined, boolean, and objects

// queston 5 - what is undifined in javascript ?

// ans - undefiend means the varibale has been declared but no values is assigend to it.

// question 6 - what is null ?

// ans - null inidcates intentional absence of data. null inidicates it not zero, it not empty its just absence of data.

// question 7 - null vs undifiend ?

// ans - undifiend mean we are not assign any values into the variable, null mean we assign a absence of value, if we use the type of the unifiend it's undifiend if we using the type of the null it's object.

// question 8 - java script hosting ?

// ans - javascript hosting is a mechansim where varibale and funtion declaration are moved the top of the scope before the code execution..

// console.log(g);
// var g;

// question - explane the global variable ?

// ans - those varibale which is not inside any funtion mean {}, global variales are accessibl through out the webpage or the document.

// wihout var varibale becommec global
const fn = function () {
    x = 20;
    console.log(x);
};

// fn();

// console.log(x);

// qeustion - what is the use of use strict keyword ?

// ans - use strict strictly checks if the varibale is defiend using var keyword.

// question - what are clouser in java script ?

// ans - closuers are funtions inside funtion and it make a normal funtion sterful. the innser funtion has assess the outer funtion variables. a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// let z = "this is the global varliable";

// const clouserFn = function () {
//     //     z = "fucntion scope variable";

//     return function () {
//         console.log(z);
//     };
// };

// clouserFn()();

// const simpleFunction = function () {
//     let x = 0;
//     x++;
//     console.log(x);
// };

// simpleFunction();
// simpleFunction();

const clouser = function () {
    let x = 0;
    return function () {
        x++;
        console.log(x);
    };
};

const ref = clouser();
// ref();
// ref();
// ref();

// question - what need the use the clousers ?

// ans - to mane selft contained modules, to make self contained state. and when we make a self contained state weh sloves global varibal problem.

const clFn = function () {
    let z = 0;

    function incFunction() {
        z++;
        console.log(z);
    }

    function init() {
        console.log("make private fincton");
    }

    init();

    return {
        incFunction,
    };
};

// const clRef = clFn();
// clRef.incFunction();
// clRef.incFunction();
// clRef.incFunction();

// question - what is iife ?

// ans - (IMMEDIATELY INVOKED FUNCTION EXPRESSION) An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// let f = "some data we want to pass inside the iife funtion";

// (function (f) {
//     // run code
//     console.log(f);
// })(f);

// question - what is name collistion ?

// ans - .name collision happes when same name function names and variable name are declared. because iife does not have name, soe there no way to can get  name collision. like if we store a function into the variable then after that we use the same name of the varible to store another data type.

function init() {
    // your code
}

// const init = 0;

// question - normal funtion vs iife ?

// ans - a normal funtion you can have name collision problem. but the iife function avoid this problem.

// module pattern

// module pattern has 2 big advantages - selft contained independent components, make code private and public, encapsulation and abstraction. module design partern is a combination of iife and the closures.

const cusFun = (function () {
    function Customer() {
        console.log("there is 100 customer");
    }

    return {
        Customer,
    };
})();

// cusFun.Customer();

// question - what are the various way to create a javascrip object ?

// ans - there is four way to make a javascript object. literabl, object.create(), es6 classes, constructor.

// literal
const obj = {};

// object.create
const newObj = Object.create(obj);
// console.log(newObj);

// constructor
const ParternNew = function () {
    this.name = "";
    this.age = "";
    this.place = "";
};

const constructorObject = new ParternNew();

class ParternNewClass {
    constructor() {
        this.name = "";
        this.age = "";
        this.place = "";
    }

    getName() {
        console.log(this.name);
    }
}

const prObject = new ParternNew();
console.log(prObject);
