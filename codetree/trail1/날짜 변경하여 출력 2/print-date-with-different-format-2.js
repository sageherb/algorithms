const fs = require("fs");
let [mm, dd, yyyy] = fs.readFileSync(0).toString().split("-");
yyyy = Number(yyyy);

console.log(`${yyyy}.${mm}.${dd}`);
