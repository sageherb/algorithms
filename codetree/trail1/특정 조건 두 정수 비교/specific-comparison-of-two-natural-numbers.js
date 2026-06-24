const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ");
a = Number(a);
b = Number(b);

const first = a < b ? 1 : 0;
const second = a === b ? 1 : 0;

console.log(first, second);
