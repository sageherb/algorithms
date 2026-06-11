const fs = require("fs");
let [yyyy, mm, dd] = fs.readFileSync(0).toString().split(".");
dd = Number(dd);

console.log(`${mm}-${dd}-${yyyy}`);
