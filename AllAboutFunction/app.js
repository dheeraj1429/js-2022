"use strict";

// default parametor
const bookingFunctionOne = function (a, b, passanger) {
    a = a || 10;
    b = b || 20;
    passanger = passanger || 1;
    const book = {
        a,
        b,
        passanger,
    };

    return book;
};

const bookingFunction = function (a = 10, b = 20, passanger = 1) {
    const book = {
        a,
        b,
        passanger,
    };

    return book;
};

// console.log(bookingFunction(10, 20, 2));
// console.log(bookingFunctionOne());

const flight = "Lh23D"; // this variable is the primitiv type, and we just passed the value into the function then the flighlnum is the like a copy of the flight variable not a original value it's like a some like flightNum = flight we just pass a copy of the variable into the new variable. but when we pass the object into the fucntion then we pass the refrence value of the object, that's why the object values changed..

const passangerObj = {
    name: "dheeraj",
    passport: 123123123123,
};

const checkIn = function (flightNum, passangerData) {
    (flightNum = "Dh22E"), (passangerData.name = "karan singh"), (passangerData.passport = 234234234234);

    console.log(flightNum);
};

// checkIn(flight, passangerObj);
// console.log(flight);
// console.log(passangerObj);

// high order function

const onWordFunction = function (str) {
    return str.replace(/ /g, "");
};

const toUpperCaseFunction = function (str) {
    const [first, ...others] = str.split("");
    return [first.toUpperCase(), others.join("")].join("");
};
4;
const transformer = function (str, fn) {
    console.log(`transfrom with the onWordFunction: ${fn(str)}`);
    console.log(`transfrom with the onWordFunction: ${fn(str)}`);
};

// transformer("this is mewww", onWordFunction);
// transformer("this is mewww", toUpperCaseFunction);

// function return anouther function

const grredFunction = function (greed) {
    return function (name) {
        console.log(`${greed} ${name}`);
    };
};

// const greedHey = grredFunction("hey");
// greedHey("dheeraj");

const paraElm = document.querySelector(".para");
const clickMeButtonElm = document.querySelector(".clickMeButton");

let count = 0;

const useDispatch = function () {
    return function (action) {
        action();
    };
};

const dispatch = useDispatch();

const incFunction = function () {
    count++;
    paraElm.textContent = count;
};

clickMeButtonElm.addEventListener("click", function () {
    dispatch(incFunction);
});

// call bind and apply
const obj = {
    name: "dheeraj",
    age: 22,

    getData() {
        return `my name is ${this.name} and i am ${this.age}`;
    },
};

const obj2 = {
    name: "lara",
    age: 21,
};

const fn = obj.getData;
const objFn = fn.call(obj);
const objFn2 = fn.call(obj2);

// the call an apply methods use to point the this keyword, but the but keyword return the new function and the new function poitn the this keyword, to that object which is you assign in the arguments

const bookObj1 = obj.getData.bind(obj);
// console.log(bookObj1());

// console.log(objFn);
// console.log(objFn2);

const x = {};
x.num = 200;

x.newFun = function () {
    this.num++;

    console.log(this);
    console.log(x.num);
};

document.querySelector(".clickMeButtonTwo").addEventListener("click", x.newFun.bind(x));

// closures

const updateFunction = function () {
    let timer = 0;

    return function () {
        timer++;
        console.log(timer);
    };
};

const newFn = updateFunction();

// newFn();
// newFn();
// newFn();

// useLocation
const testFunction = function () {
    const useLocation = function () {
        return function () {
            return window.location;
        };
    };

    const location = useLocation();

    console.log(location().pathname);
};

// testFunction();
const aFn = function () {
    let a = 10;
    console.log(a);

    return function () {
        a = 11;
        console.log(a);
    };
};

const bFn = aFn();
bFn();
bFn();
bFn();
bFn();
