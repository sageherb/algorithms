const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().split("\n");
a = Number(a);
b = Number(b);
c = Number(c);

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));
