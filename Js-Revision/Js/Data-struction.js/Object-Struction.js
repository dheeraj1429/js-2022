///////////////////////////////
// Objects

const DemoDataOne = {
  name: "Demo Restorent",
  startMenu: ["pizza", "momos", "roti"],
  mainMenu: ["Chai", "Roti"],

  OpenData: {
    sun: {
      Morning: "10 am",
      Evening: "5 pm",
    },

    mon: {
      Morning: "12 am",
      Evening: "8 pm",
    },

    tue: {
      Morning: "8 am",
      Evening: "4 pm",
    },
  },

  getOrderData: function () {
    console.log(`hello! ${this.CustomerName} your ordering time is ${this.EnteryTime} your order is ${this.startMenu[this.OrderFoodData]}`);
  },

  setObjectDataFuntion: function ({ name, time, data }) {
    DemoDataOne.CustomerName = name;
    DemoDataOne.EnteryTime = time;
    DemoDataOne.OrderFoodData = data;
  },
};

// named exporting
const { sun, mon, tue } = DemoDataOne.OpenData;
console.log(sun, mon, tue);

// assing name
const { name: restrentName, startMenu: restrentStartMenu } = DemoDataOne;
console.log(restrentName, restrentStartMenu);

// default values
const { mainMenu = [], menu = [] } = DemoDataOne;
console.log(mainMenu, menu);

// mutating array
let a = 10;
let b = 10;
const obj = { a: 100, b: 200 };

({ a, b } = obj);
console.log(a, b);

// nested obj
const {
  sun: { Morning: mor, Evening: eve },
} = DemoDataOne.OpenData;

console.log(mor, eve);

// set dat object
DemoDataOne.setObjectDataFuntion({
  name: "Demo name",
  time: "13 pm",
  data: 2,
});

DemoDataOne.getOrderData();

// test
//////////////////////////////

const testOne = [1, 2, 3];

const getTestData = function (...testData) {
  console.log(`${testData}`);
};

getTestData(...testOne);

// SPRED
const arr = [1, 2, 3];
const arrOne = [4, 5, ...arr];
// REST
const [x, ...other] = arrOne;
console.log(arr, arrOne, x, other);

const AllFoodItem = [...DemoDataOne.startMenu, ...DemoDataOne.mainMenu];
console.log(AllFoodItem);

// adding numbers
const num = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

const ar = new Array(1, 2, 4);

num(...ar);
