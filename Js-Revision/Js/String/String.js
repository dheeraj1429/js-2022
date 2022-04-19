"use strict";

/////////////////////////
// string

const str = "Tab on go the is me";
const strOne = "Demo,Content";

// methods
///////////////////////////

// split
const strToAr = str.split(" ");
const strToArOne = strOne.split(",");
console.log(strOne, strToArOne);

// lenght
console.log(str.length);

// index of
console.log(str.indexOf("d"));
console.log(str.indexOf("T"));
console.log(str.lastIndexOf("g"));
console.log(str.lastIndexOf("Tab"));

// slice
console.log(str.slice(0, 3));
console.log(str.slice(1));

// trim
console.log(str.slice(str.indexOf(" ")).trim());
console.log(str.slice(str.lastIndexOf(" ")).trim());

// 1-
const CheckMiddleSeat = (seat) => {
  const s = seat.slice(-1).toLowerCase();
  if (s === "d" || s == "r") {
    console.log("Hey you got the middle seat");
  } else {
    console.log("hmm! yo got the last seat");
  }
};

CheckMiddleSeat("23Bd");
CheckMiddleSeat("23B2");
CheckMiddleSeat("23Cv");

// 2 -
const changeTheName = function (str) {
  const properName = str.toLowerCase();
  const final = properName[0].toUpperCase() + properName.slice(1);
  console.log(final);
};
const YourName = "dHeeRaj sInGh";

changeTheName(YourName);

// loop over the string
strToAr.forEach((item) => {
  //   console.log(item);
});

// replace
const TestStr = "Hello this is me! this is not good";
console.log(TestStr.replace("this", "that"));
console.log(TestStr.replaceAll("this", "that"));

// includes
console.log(TestStr.includes("this"));

/////////////////////////////////////////
const name = "dHeeRaj sIngH";
const [first, second] = name.toLowerCase().split(" ");
const strFuntion = (strFuntion) => strFuntion[0].toUpperCase() + strFuntion.slice(1);
const proper = `${strFuntion(first)} ${strFuntion(second)}`;
console.log(proper);

//task
const cardNumber = function (num) {
  const task = num + "";
  const cardNum = task.slice(-4);
  console.log(cardNum.padStart(task.length, "*"));
};
cardNumber(142325);
cardNumber("5124232131232");

///////////////////////////////////
// task
const TaskStr = `demo content One
    Demo conten Two
demo Content Three
        demo Content four
            demo Content FIve`;

const properOutPut = function (str) {
  const spliteDat = str.split("\n");

  for (const el of spliteDat) {
    const removeSpace = el.trim();
    const arStr = removeSpace.split(" ");

    for (const item of arStr) {
      const lower = item.toLowerCase();
      const demoTestStr = (demoTestStr) => demoTestStr[0].toUpperCase() + demoTestStr.slice(1);
      const properCase = `${demoTestStr(lower)}`;
      console.log(properCase);
    }
  }
};

properOutPut(TaskStr);
