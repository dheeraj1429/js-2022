const a = [1, 2, 3];
const reverse = [];
for (let i = a.length - 1; i >= 0; i--) {
    reverse.push(a[i]);
}

// console.log(a.reverse());

// How to Get Min and Max Elements of an Array Using
const b = [1, 12, 3];

// console.log(Math.min(...b));
// console.log(Math.max(...b));

const getGtNumber = b.reduce((acc, crv) => {
    return acc > crv ? acc : crv;
});

const maxFunction = function () {
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (b[i] > b[j]) {
                return b[i];
            }
        }
    }
};

// console.log(maxFunction());

const maxNumber = b.reduce((acc, crv) => {
    return Math.max(acc, crv);
});

// const z = [1, 2, -300, 400, 5, 5];
// const sortNumber = z.sort((a, b) => a - b);

// for (let i = 0; i < z.length; i++) {
//     console.log(z[i]);

// }

// console.log({} == {});
// console.log(1 == 1);

const some = {
    a: "some",
};

const dom = {
    a: "some",
};

// console.log(some.a === dom.a);

let someNewElm = 10;
{
    let someNewElm = 30;
}

// console.log(someNewElm);

let arr = [4, 2, 5, 12];
// let temp;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
// console.log(arr);

arr.forEach((el, index) => {
    if (el < arr[index - 1]) {
        arr[index] = arr[index - 1];
        arr[index - 1] = el;
    }
});

// console.log(arr);

/*
Primitive types -  String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.
Number - It represents a number and can be written with or without decimals.
BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.
*/

let un;
// console.log(typeof un); // undifined
let nu = null;
// console.log(typeof nu); // object

// Explain Hoisting in javascript.

// Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

// This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

// console.log(va);
// var va = "this is hoisted";

// dn();

function dn() {
    console.log("somthing worng");
}

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:
// Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

// Difference between “ == “ and “ === “ operators.
// Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.

//  Difference between var and let keyword in javascript.
/*
From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
The keyword 'Var' has function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.
'var' declares a variable that will be hoisted but 'let' declares a variable that will not be hoisted.
*/

// const someNewArray = [12, 2, 3, 123, 10, 3, 12];
// console.log(someNewArray.slice(1)); // remove first elements from the array - and does't mute the array
// console.log(someNewArray.slice(0, 1));
// console.log(someNewArray.slice(1, 3));
// console.log(someNewArray.slice(someNewArray[someNewArray.length - 1], 3));
// console.log(someNewArray.slice(1, 2));
// console.log(someNewArray.length - 1);
// console.log(someNewArray.splice(0, 3));

// console.log(someNewArray);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1, "dheeraj");
// fruits.splice(2, 2);
// console.log(fruits);

// remove dupliate values from the array
// const set = new Set(someNewArray);
// console.log(set);

const someNewArray = [12, 2, 3, 123, 200, 3, 12, 2, 12];
let dupValue = [];
for (let i = 0; i < someNewArray.length; i++) {
    if (dupValue.indexOf(someNewArray[i]) == -1 && !!dupValue) {
        dupValue.push(someNewArray[i]);
    }
}

// console.log(dupValue);
const dupArry = someNewArray.filter((el, i) => {
    return someNewArray.indexOf(el) === i;
});

// console.log(dupArry);
const maxValue = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                return arr[j];
            }
        }
    }
    return arr;
};

// console.log(maxValue(someNewArray));

// create a array then remove the all duplicates elements from the array then  and count the all remove the last element from the array without using pop method .And plus it then return total from the fuction..
const ar = [12, 2, 3, 123, 200, 3, 12, 2, 12, 200];

const fn = function (arr) {
    const newAr = ar.filter((el, i) => {
        if (arr.indexOf(el) === i) {
            return el;
        }
    });

    const index = newAr.indexOf(newAr[newAr.length - 1]);
    newAr.splice(index, 1);

    let total = newAr.reduce((acc, crv) => {
        return acc + crv;
    });

    return total;
};

// console.log(fn(ar));

// reverse array
const originalArray = [1, 2, 3, 4];
const reverseArr = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
    reverseArr.push(originalArray[i]);
}
// console.log(reverseArr);

// SOmE nEw -> Some New
const str = "SOmE nEw DaTA";

const convertFn = (str) => str[0].toUpperCase() + str.slice(1);

const makeProper = function (str) {
    const spliteData = str.toLowerCase().split(" ");
    console.log(spliteData);
    let newStr = [];
    for (let i = 0; i < spliteData.length; i++) {
        newStr.push(convertFn(spliteData[i]));
    }

    return newStr.join(" ");
};

// console.log(makeProper(str));

// const makeProper = function (str) {
//     const strAr = str.toLowerCase().split(" ");
//     const [firstName, secondName] = strAr;
//     const properName = convertFn(firstName) + " " + convertFn(secondName);
//     return properName;
// };

// console.log(makeProper(str));
// convert = ThIs iS mE -> This Is Me

// promise
const num = 2;

// const promise = new Promise(function (resolve, rejected) {
//     if (num > 8) {
//         resolve("primise resent the data");
//     } else {
//         rejected("something worng");
//     }
// });

// promise
//     .then((res) => console.log(res))
//     .catch((err) => {
//         console.log(err);
//     });

const newFn = function () {
    if (Object.keys(arguments).length) {
        console.log(arguments[0]);
    } else {
        throw new Error("somthing worng");
    }
};

// newFn();

function removeProperty(obj, prop) {
    delete obj.prop;
    return true;
}

const obj = {
    prop: null,
};

// removeProperty(obj, obj.prop);
function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    const date = new Date(userDate).toLocaleString().split(",")[0].split("/");
    let [a, b, c] = date;
    let temp;
    temp = a;
    a = b;
    b = temp;
    const ar = [a, b, c];
    const reverDate = [];
    for (let i = ar.length - 1; i >= 0; i--) {
        reverDate.push(date[i]);
    }
    return reverDate.join("");
}

// console.log(formatDate("12/31/2014"));

const newArr = [1, 2, 3, 41, 12, 412, 99];

function biggestNumberInArray(arr) {
    let maxNumber = arr[0];

    arr.filter((el, i) => {
        if (el > maxNumber) {
            maxNumber = el;
        }
    });

    return maxNumber;
}
// console.log(biggestNumberInArray(newArr));

/**
 * Question : - use the strings of numbers remove all duplicate string devide the all string into the two numbers and the convert the string into the array. then get the max values from the array without using max method. devide the max number with 40 and return back the persentage ?
 */

const genrateFn = function () {
    const arStr = "14203810138161203847123";
    const validStr = Array.from(new Set(Array.from(arStr)));
    let temp = validStr[0];

    validStr.filter((el, i) => {
        if (el > temp) {
            temp = el;
        }
    });

    const persentage = temp / 100;
    return persentage;
};

// console.log(genrateFn());
