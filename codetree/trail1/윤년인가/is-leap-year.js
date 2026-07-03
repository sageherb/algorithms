const fs = require("fs");
let y = fs.readFileSync(0).toString().trim();
y = Number(y);

if (y % 4 !== 0 || (y % 100 === 0 && y % 400 !== 0)) {
    console.log(false);
} else {
    console.log(true);
}
