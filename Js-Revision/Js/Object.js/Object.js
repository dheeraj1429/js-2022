"use strict";
// Object
//////////////////////////

const DemoData = {
  firstName: "Dheeraj",
  lastName: "Singh",
  birthYear: 2000,
  drivingLicense: true,

  setUserData: function () {
    this.age = 2021 - this.birthYear;
    return 2021 - this.birthYear;
  },

  userDetails: function () {
    console.log(`hello my name is ${this.firstName}${this.lastName}, I am ${this.setUserData()} years old`);
  },

  joinName() {
    this.FullName = `${this.firstName} ${this.lastName}`;
  },

  getSummry: function () {
    console.log(`${this.FullName} is a ${this.age} years old, and he has a ${this.drivingLicense == true ? "driver's livense" : "nothing"}`);
  },
};

DemoData.userDetails();

console.log(DemoData["firstName"]);
console.log(DemoData.firstName);
console.log(DemoData.setUserData());
console.log("from setUserFuntion " + DemoData["age"]);
DemoData.joinName();
DemoData.getSummry();
