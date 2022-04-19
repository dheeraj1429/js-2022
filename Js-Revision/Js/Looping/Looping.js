//////////////////////////////////////////
// Looping over the array

// for of loop
const arrOne = [1, 2, 3, 4, 5];
const arrTwo = ["aman", "karan", "sonam"];

const allArrayData = [...arrOne, ...arrTwo];

// for (const item of allArrayData.entries()) {
//   console.log(item);
// }

// console.log([...allArrayData.entries()]);

// for (const [i, el] of allArrayData.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

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

const {
  OpenData: { sun, mon, tue },
} = DemoDataOne;

console.log(sun, mon, tue);

// loopign over the object
////////////////////////////////

// Object.keys
const TestDataDemo = Object.keys(DemoDataOne);

for (const el of TestDataDemo) {
  console.log(el);
}

// Object.values
for (const el of Object.values(DemoDataOne["OpenData"])) {
  console.log(el);
}

// Object.enteris
const ObjectEntries = Object.entries(DemoDataOne);
// looping over the object

for (const [x, { sun, mon }] of ObjectEntries) {
  if (sun && mon !== undefined) {
    console.log(sun, mon);
  }
}
