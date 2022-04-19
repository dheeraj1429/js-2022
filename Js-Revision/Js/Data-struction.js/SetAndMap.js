////////////////////////////////////
// Set

const demoOneSet = new Set(["First", "Second", "Three", "Second", "Three", "First"]);

demoOneSet.add("Five").add("Six");

console.log(demoOneSet);
console.log(typeof demoOneSet); // object

// set property
console.log(demoOneSet.size);
console.log(demoOneSet.has("First"));
demoOneSet.add("Four");
demoOneSet.delete("First");
console.log(demoOneSet);
demoOneSet.clear();
console.log(demoOneSet);

// test
////////////////////////////////

const arrTest = ["First", "Second", "Three", "Second", "Three", "First"];
let ar = [];

const newSet = new Set(arrTest);
ar = [...newSet];

console.log(ar);

/////////////////////////////////
// Maps

const mapEL = new Map();
mapEL.set("sameDemoData", new Set(["First", "Second", "Three", "Second", "Three", "First"]));
mapEL.set("Open", 12).set("Close", 20);
mapEL.set("Name", "Dheeraj");
mapEL.set(true, "We are open").set(false, "We are close");

console.log(mapEL.has("Name"));
console.log(mapEL.size);
console.log(mapEL.get("Name"));

let num = 10;
console.log(mapEL.get(mapEL.get("Open") > num || mapEL.get("Close") < num));

// mapEL.clear();

console.log(mapEL.has("Name"));
mapEL.delete(2);
console.log(mapEL.size);

const x = [1, 2];
mapEL.set(x, "Arr");

console.log(mapEL);
console.log(mapEL.get(x));

////////////////////////////
// Map 2

const MapData = new Map([
  ["Name", "G.i.c"],
  ["SctudentName", "Dheeraj"],
  ["age", "21"],
  ["class", "12"],
]);

for (const el of MapData) {
  console.log(el);
}
console.log(MapData);

const newLocal = "Goal";
/////////////////////////////////////
// map Ex :-

const dataMap = new Map([
  [20, "GOAL"],
  [40, "Substitution"],
  [50, "GOAL"],
  [60, "Yello Card"],
  [66, "Red Card"],
  [70, "Substitution"],
  [90, "GOAL"],
]);

console.log(dataMap.values());

// 1 - convert the map into the set and push into the array
const arr = [...new Set([...dataMap.values()])];
console.log(arr);

// 2 -
dataMap.delete(60);

// 3-
for (const [key, value] of dataMap) {
  const timeData = key > 60 ? "First Half" : "Second Half";
  console.log(`${timeData}: ${value}`);
}
