// qution ?
// 01:02 PM -> 13:02
// 02:11 AM

const checkTimeFucntion = function (time12h) {
    let [time, modifire] = time12h.split(" ");
    let [hour, minutes] = time.split(":");
    if (modifire === "PM") hour = +hour + 12;

    return `${hour}:${minutes}`;
};

// console.log(checkTimeFucntion("01:02 PM"));
// console.log(checkTimeFucntion("05:02 PM"));
// console.log(checkTimeFucntion("10:02 AM"));
// console.log(checkTimeFucntion("01:02 AM"));

// done

// qution ?
const obj = {
    a: 10,
    name: "dheeraj sing",

    greed() {
        return this;
    },

    morning: () => {
        return this;
    },
};

// console.log(obj.greed());
// console.log(obj.morning());

// qution ?
// checking sum zero
// [-5,-4,-3,-2,-1, 0, 2, 4, 3, 5]

const checkFunction = function (ar) {
    for (let i = 0; i < ar.length; i++) {
        for (let j = 1; j < ar.length; j++) {
            if (ar[i] + ar[j] === 0) {
                return [ar[i], ar[j]];
            }
        }
    }
};

const chekcSumFunction = function (ar) {
    let left = 0;
    let right = ar.length - 1;

    while (left < right) {
        let sum = ar[left] + ar[right];

        if (sum === 0) {
            return [ar[left], ar[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
};

const ar = [-5, -4, -3, -2, -1, 0, 2, 4, 4, 4];
// console.log(chekcSumFunction(ar));
// console.log(checkFunction(ar));

// qution ?
// String Anagram Problem
const isAnagram = function (string1, string2) {
    if (string1.length !== string2.length) return false;
    let obj = {};
    for (let letters of string1) {
        obj[letters] = (obj[letters] || 0) + 1;
    }

    for (let items of string2) {
        if (!obj[items]) {
            return false;
        }

        obj[items] -= 1;
    }

    //     console.log(obj);
    return true;
};

// console.log(isAnagram("dheeraj", "eerjadh"));

// qution ?
// Counting Unique Numbers Problem

const checkUnique = function (ar) {
    let uni = [];
    let k = 0;
    for (let i = 0; i < ar.length; i++) {
        k++;
        if (ar[k] !== ar[i]) {
            uni.push(ar[i]);
        }
    }

    return uni;
};

const arNew = [1, 1, 2, 2, 3, 4, 4, 5, 5, 9, 9];
// console.log(checkUnique(arNew));

// qution ?
// Divide & Conquerer Technique

const algo = function (array, num) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);

        if (array[midIndex] > num) {
            return (min = midIndex - 1);
        } else if (array[midIndex] < num) {
            return (min = midIndex + 1);
        } else {
            return midIndex;
        }
    }

    return -1;
};

const result = algo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
// console.log(result);

// qution ?
// Check Square Elements of Another Array
const firstArr = [1, 2, 3, 4];
const secondArr = [1, 4, 9, 16];

const checkSqure = function (arrFirst, arrSecond) {
    for (let i = 0; i < arrFirst.length; i++) {
        let isSqure = false;
        for (let j = 0; j < arrSecond.length; j++) {
            if (arrFirst[i] * arrFirst[i] === arrSecond[j]) {
                isSqure = true;
            }

            if (j === arrSecond.length - 1) {
                if (!isSqure) return false;
            }
        }
    }

    return true;
};

// console.log(checkSqure(firstArr, secondArr));

// qution ?
const checkSqureFunction = function (arr1, arr2) {
    let map1 = {};
    let map2 = {};

    for (let items of arr1) {
        map1[items] = (map1[items] || 0) + 1;
    }
    for (let itmes of arr2) {
        map2[itmes] = (map2[itmes] || 0) + 1;
    }
    for (let key in map1) {
        if (!map2[key * key]) {
            return false;
        }

        if (map1[key] !== map2[key * key]) {
            return false;
        }
    }
    return true;
};

// console.log(checkSqureFunction(firstArr, secondArr));

// qution ?
// How would you verify a prime number?
const checkPrime = function (num) {
    let devide = 2;
    if (num % devide === 0) {
        return true;
    } else {
        return false;
    }
};

// console.log(checkPrime(10));

// qution ?
// How could you find all prime factors of a number?

// number = 69
// number / 2 === 0 ? return number : devideo++

function primeFactors(n) {
    let fector = [];
    let devidor = 2;

    while (n > 2) {
        if (n % devidor === 0) {
            fector.push(devidor);
            n = n / devidor;
        } else {
            devidor++;
        }
    }

    return fector;
}

// console.log(primeFactors(70));

// qution ?
// Program for Fibonacci numbers
const num = 200;

let x = 0;
let y = 1;

let fn = x + y;
while (fn < num) {
    fn = x + y;
    x = y;
    y = fn;

    // console.log(fn);
}

const str = "dhrj";

// qution ?
const checkString = function (str) {
    const vavol = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < vavol.length; i++) {
        if (str.includes(vavol[i])) return true;
    }

    return false;
};

// console.log(checkString(str));

// qution ?
let primeNumber = 5;

const checkPrimeNumber = function (num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
};

// console.log(checkPrimeNumber(primeNumber));

// qution ?
const checkFecture = function (num) {
    let nu = [];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            nu.push(i);
        }
    }

    return nu;
};

// console.log(checkFecture(20));

// qution ?
const primeFactorsFucntion = function (num) {
    let fector = [];
    let devide = 2;

    while (num > 2) {
        if (num % devide === 0) {
            fector.push(devide);
            num = num / devide;
        } else {
            devide++;
        }
    }

    return fector;
};

// console.log(primeFactorsFucntion(20));

// qution ?
const z = 1000;
const febonic = function (num) {
    let x = 0;
    let y = 1;
    let sum = x + y; // -> 0 + 1 => 1, 3

    while (sum < z) {
        // 999 < 1000;
        sum = x + y; // => sum = x -> 2 + y -> 3 => 5
        x = y; // 1
        y = sum; // 3

        console.log(sum);
    }
};

// console.log(febonic(z));

const arn = [1, 3, 2, 5, 6, 7, 3, 8, 10, 8];

// qution ?
const checkLarger = function (number) {
    let temp = 0;
    for (let i = 0; i < number.length; i++) {
        if (temp < number[i]) {
            temp = number[i];
        }
    }
    return temp;
};

// console.log(checkLarger(arn));

// qution ?
let count = 1;
const rec = function (number) {
    if (count > number) {
        return;
    }

    console.log("print");
    count++;
    rec(10);
};

// const resultN = rec(10);
// console.log(resultN);

{
    const arm = [1, 4, 2, 5, 1, 9];

    // [1,2,4,5] => swipe
    let temp = 0;
    for (let i = 0; i < arm.length; i++) {
        for (let j = 0; j < arm.length; j++) {
            if (arm[i] > arm[j]) {
                temp = arm[i];
            }
        }
    }
    // console.log(temp);
}

const noSortedAr = [1, 3, 2, 4, 5, 30, 10, 1, 10, 20, 5];

// qution ?
// [1,2,3,4] -> swipe
const getLarge = function () {
    let temp = 0;
    const sort = noSortedAr.filter((el) => {
        if (el > temp) {
            temp = el;
            return temp;
        }
    });

    return sort[sort.length - 1];
};
// console.log(getLarge());

const sortThis = [100, 200, 1, 3, 4, 2];

// qution ?
const sort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
};

// console.log(sort(sortThis));

// qution ?
const greatestCommonDivisor = function (number1, number2) {
    let devOne = [];
    let devTow = [];

    for (let i = 1; i <= number1; i++) {
        if (number1 % i === 0) {
            devOne.push(i);
        }
    }

    for (let i = 1; i <= number2; i++) {
        if (number2 % i === 0) {
            devTow.push(i);
        }
    }

    for (let z = devOne.length - 1; z >= 0; z--) {
        for (let x = devTow.length - 1; x >= 0; x--) {
            if (devOne[z] === devTow[x]) {
                return devOne[z];
            }
        }
    }
};

// console.log(greatestCommonDivisor(14, 21)); // 7
// console.log(greatestCommonDivisor(69, 169)); // 1

// qution ?
// remove duplicates and sort the array
const removeDuplicate = function (array) {
    const set = [];

    for (let i of array) {
        if (set.indexOf(i) === -1) {
            set.push(i);
        }
    }

    for (let i = 0; i < set.length; i++) {
        for (let j = 0; j < set.length; j++) {
            if (set[i] < set[j]) {
                [set[i], set[j]] = [set[j], set[i]];
            }
        }
    }

    return set;
};

// console.log(removeDuplicate([1, 3, 3, 2, 1, 5, 10, 4, 8, 3]));

// qution ?
// merge two sorted array

const mergeSortedArray = function (array1, array2) {
    /**
     * @for merge all the elements first
     * @sort sort all elements using swipe methods
     * @return return the element of array from the function
     */
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }

    for (let j = 0; j < array1.length; j++) {
        for (let x = 0; x < array1.length; x++) {
            if (array1[j] < array1[x]) {
                [array1[j], array1[x]] = [array1[x], array1[j]];
            }
        }
    }

    // sort the elements
    return array1;
};

// console.log(mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29, 1, 2]));

// swap number without temp
{
    a = 10;
    b = 20;
    [a, b] = [b, a];
    // console.log(a, b);
}

// qution ?
// string reverse
const reverse = function (str) {
    let reverseStr = [];

    if (!str || str.length > 2 || typeof str != "string") return str;

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr.push(str[i]);
    }

    return reverseStr.join("");
};

// console.log(reverse("you are a nice dude"));

const reverseInPlace = function (str) {
    const arString = str.split(" ").reverse().join(" ").split("").reverse().join("");
    console.log(arString);
};

// console.log(reverseInPlace("I am the good boy")); //  "I ma eht doog yob"

// First non repeating char

const firstNonRepeatChar = function (str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // console.log(i + 1, str.indexOf(char));
        if (str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
};

// console.log(firstNonRepeatChar("the qtuick brown fox")); // done but don't know how ?

// qution ?
// check palindrome
const isPalindrome = function (str) {
    let reverse = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reverse.push(str[i]);
    }
    if (reverse.join("") === str) return true;
    return false;
};

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("toyota"));

// console.log(5 + ((Math.random() * 4 + 1) / 5) * 2);

const missingNumber = function (arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return total - sum;
};

// console.log(missingNumber([1, 3, 4, 5]));

const sumFinder = function (array, number) {
    let n = array.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] + array[j] === number) {
                return true;
            }
        }
    }

    return false;
};

// console.log(sumFinder([6, 4, 3, 2, 1, 7], 9));
// console.log(sumFinder([6, 4, 3, 2, 1, 7], 2));
