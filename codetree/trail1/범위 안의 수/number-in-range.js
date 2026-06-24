const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();
a = Number(a);

console.log(10 <= a && a <= 20 ? "yes" : "no");

