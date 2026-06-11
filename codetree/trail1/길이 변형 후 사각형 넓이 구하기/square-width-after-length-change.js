const fs = require("fs");
let [x, y] = fs.readFileSync(0).toString().split(" ");
x = Number(x) + 8;
y = Number(y) * 3;

console.log(x);
console.log(y);
console.log(x * y);
