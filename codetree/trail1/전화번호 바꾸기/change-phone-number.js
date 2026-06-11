const fs = require("fs");
let [a, x, y] = fs.readFileSync(0).toString().split("-");
x = Number(x);
y = Number(y);

console.log(`${a}-${y}-${x}`);
