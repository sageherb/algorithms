const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
const a = Number(input[0]);
let [b, c, d, e] = input[1].split(" ");
b = Number(b);
c = Number(c);
d = Number(d);
e = Number(e);

console.log(a > b ? 1 : 0);
console.log(a > c ? 1 : 0);
console.log(a > d ? 1 : 0);
console.log(a > e ? 1 : 0);
