const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();
a = Number(a);

if (a % 2 === 0) {
    a /= 2;
}

if (a % 2 !== 0) {
    a = (a + 1) / 2;
}

console.log(a);
