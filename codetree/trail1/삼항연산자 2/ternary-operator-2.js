const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();
a = Number(a);

console.log(a === 1 ? "t" : "f");
