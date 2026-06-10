const fs = require("fs");
let [c, a, b] = fs.readFileSync(0).toString().split("\n");
c = c.trim();
a = Number(a).toFixed(2);
b = Number(b).toFixed(2);

console.log(c);
console.log(a);
console.log(b);
