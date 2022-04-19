/////////////////////////////////////
// Dom
const headingOne = document.querySelector(".heading");

const heading = document.querySelector(".heading");
const demo = parseFloat(getComputedStyle(heading).fontSize) + 20 + "px";

console.log(demo);

// Changin the css variables
document.documentElement.style.setProperty("--mainColor", "#000");
console.log(document.documentElement.style); // -> all style property

// Attribute
const img = document.querySelector("img");
console.log(img.src); // -> http://127.0.0.1:5500/
console.log(img.getAttribute("src"));

// setAttribute
img.setAttribute("demo", "demo");

// Get bounding clint
img.addEventListener("click", function () {
  console.log(this.getBoundingClientRect());
});

// Offcet
console.log("window offset X: " + window.pageXOffset, "Window offset Y: " + window.pageYOffset);

// height / width viewport
console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth);

// Scroll
document.querySelector(".heading").addEventListener("click", function () {
  //   window.scrollTo(0, 10);
  //   window.scrollTo(0 + window.pageXOffset, 100 + window.pageYOffset);
  // Smooth behavior
  //   window.scrollTo({
  //     left: 0 + window.pageXOffset,
  //     top: 100 + window.pageYOffset,
  //     behavior: "smooth",
  //   });
  //   document.querySelector(".sectionDiv").scrollIntoView({
  //     behavior: "smooth",
  //   });
});

// BUBBLING AND CAPTURING

/*
1 - CAPTURING PHASE
2 - TARGET PHASE
3 - BUBBLING PHASE
*/

// random color
const randomInt = (max, min) => Math.trunc(Math.random() * (max - min + 1) + min);

const genrateColor = () => {
  console.log(`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`);
};

headingOne.addEventListener("click", function () {
  genrateColor();
});

// Sibling -> Going sideway
console.log(headingOne.previousElementSibling);
console.log(headingOne.nextElementSibling);

console.log(headingOne.previousSibling);
console.log(headingOne.nextSibling);

// parent
console.log(headingOne.parentNode);
console.log(headingOne.parentElement);

// Child

const parent = headingOne.parentElement;
const parentNode = headingOne.parentNode;

// Put parent node children into the arr and spred them
const arChild = [...parentNode.children];

console.log(arChild);
console.log(parentNode);
console.log(parent.children);

const MainDiv = document.querySelector(".MainDiv");
console.log(MainDiv.parentNode);

/////////////////////////////////////////////
// INTERSECTION OBSERVER API

const sectionDiv = document.querySelectorAll(".sectionDiv");

const option = {
  root: null,
  threshold: 0.1,
};

const callBack = function (entries, observe) {
  entries.forEach((item) => {
    if (item.isIntersecting) {
      console.log(item);
    }
  });
};

const observer = new IntersectionObserver(callBack, option);

sectionDiv.forEach((item) => {
  observer.observe(item);
});

// SLider Components

// Dom Liftcycel Event

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Dom content loaded fully", e);
});

window.addEventListener("load", function (e) {
  console.log("window fully loaded", e);
});

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log("window change", e);
//   e.returnValue = "";
// });
