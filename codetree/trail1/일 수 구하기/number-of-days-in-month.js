const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();
n = Number(n);

if (n === 2) {
    console.log(28);
} else if ((n < 8 && n % 2 === 0) || (n > 7 && n % 2 !== 0)) {
    console.log(30);
} else {
    console.log(31);
}
