// Importing module
//////////////////////////////////////////
// MODULE

import "./Exporting-module.js";
import { someDemoData } from "./Exporting-module.js";

// import { sumNumber } from "./Exporting-module.js";
// import { data } from "./Exporting-module.js";

// run the funtion from the module component
// console.log(sumNumber(20));
// console.log(data);

import * as ExportingData from "./Exporting-module.js";

console.log(ExportingData.data);
console.log(ExportingData.sumNumber(20));

console.log(someDemoData.getAllData());

//////////////////////////////////////////
