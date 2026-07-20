const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();
n = Number(n);

const arr = [];
let i = 1;

while(i <= n) {
    arr.push(i);
    i++;
}

console.log(arr.join(" "));
