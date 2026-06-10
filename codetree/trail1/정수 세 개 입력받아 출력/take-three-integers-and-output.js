const fs = require("fs");
let [ab, c] = fs.readFileSync(0).toString().split("\n");
let [a, b] = ab.split(" ");

console.log(`${a} ${b} ${c}`);
