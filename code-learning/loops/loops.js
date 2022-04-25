const arr = ["a", "b", "c"];

const b = [];

// arr.forEach((el) => {
//     b.push(el.toUpperCase());
// });

// for (let i = 0; i < arr.length; i++) {
//     b.push(arr[i].toUpperCase());
// }

let i = 0;
while (i < arr.length) {
    b.push(arr[i].toUpperCase());
    i++;
}

console.log(b);
