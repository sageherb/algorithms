const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();
n = Number(n);

const arr = [];

for (let i = n; i >= 1; i--) {
    arr.push(i);
}

console.log(arr.join(" "));
