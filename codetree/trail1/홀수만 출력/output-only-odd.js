const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ");
a = Number(a);
b = Number(b);

const arr = [];

for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) arr.push(i);
}

console.log(arr.join(" "));
