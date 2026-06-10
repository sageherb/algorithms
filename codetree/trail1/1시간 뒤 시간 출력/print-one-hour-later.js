const fs = require("fs");
let [h, m] = fs.readFileSync(0).toString().split(":");
h = Number(h);

console.log(`${h + 1}:${m}`);
