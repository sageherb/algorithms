const fs = require("fs");
let n = fs.readFileSync(0).toString();
n = Number(n);

const ft = 30.48;

console.log((n * ft).toFixed(1));
