//////////////////////////////////////////
// Array

const DemoData = {
  name: 'Demo Restorent',
  startMenu: ['pizza', 'momos', 'roti'],
  mainMenu: ['Chai', 'Roti'],

  getFood: function (startMenuIndex, mainMenuIndex) {
    return `your order is ${this.startMenu[startMenuIndex]} and ${this.mainMenu[mainMenuIndex]}`;
  },
};

const { name, startMenu } = DemoData;
const [a, b, c] = DemoData.startMenu;
console.log(name);
console.log(a, b, c);

let [first, second] = DemoData.startMenu;

// switch /////////////////////

[first, second] = [second, first];
console.log(first, second);

//get food funtion
const orderData = DemoData.getFood(2, 1);
console.log(orderData);

// nested array // default parameters
const nestedArr = [1, 2, [3]];
const [x = 1, , [y = 1, z = 1]] = nestedArr;
console.log(x, y, z);
