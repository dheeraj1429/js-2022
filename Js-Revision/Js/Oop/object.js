'use strict';

const Person = function (name, birthyear) {
  // Instance properties
  this.name = name;
  this.birthyear = birthyear;
};

const firstPerson = new Person('demo', 1999);
const secondPerson = new Person('dheeraj', 2000);

// console.log(firstPerson, secondPerson);

// Prototype
Person.prototype.calcAge = function () {
  return 2022 - this.birthyear;
};

// console.log(firstPerson.calcAge());
// console.log(secondPerson.calcAge());

// the firstPercon objct does't have any calcAge funtion but we can access that, just for prototype Inharitance, the firstPerson and the seconPerson object connect to that Person object that's why we can access Person properties
// console.log(firstPerson);

// check the object is instance of the class
// console.log(firstPerson instanceof Person);

// console.log(Person.prototype.constructor);

// console.log(firstPerson.__proto__);

// const arr = [1, 2, 2, 1, 2, 3, 4, 5, 1];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// console.log(dr.getAge);
// console.log(dr.greed);

// const account = {
//   data: [213, 1233, 4, 55, 46, 7],
//   owner: 'dheeraj',

//   get latest() {
//     return this.data.slice(-1).pop();
//   },

//   set update(data) {
//     return this.data.push(data);
//   },
// };

// account.update = 200;
// console.log(account.latest);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.break = function () {
  this.speed -= 20;
  return this.speed;
};

Car.prototype.SpeedUp = function () {
  this.speed += 20;
  return this.speed;
};

const bmw = new Car('BMW', 120);
const merceds = new Car('Mercedes', 82);

class PersonCl {
  constructor(birthyear, name) {
    this.birthyear = birthyear;
    this.name = name;
  }

  get getAge() {
    return 2022 - this.birthyear;
  }

  get greed() {
    return 'hey hello from the prototype oop';
  }

  static hey() {
    console.log('hello there 👍');
  }
}

const dr = new PersonCl(1999, 'dheeraj');
