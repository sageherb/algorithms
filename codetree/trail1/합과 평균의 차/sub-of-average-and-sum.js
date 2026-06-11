const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().split(" ");
a = Number(a);
b = Number(b);
c = Number(c);

const sum = a + b + c;
const avg = sum / 3;

console.log(sum);
console.log(avg);
console.log(sum - avg);
