const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();
n = Number(n);

const arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(i * n);
}

console.log(arr.join(" "));
