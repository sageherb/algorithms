const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split("\n");
a = Number(a);
b = Number(b);

console.log((a + b).toFixed(2));
