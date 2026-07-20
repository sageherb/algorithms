const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ");
a = Number(a);
b = Number(b);

const arr = [];

for (let i = b; i >= a; i--) {
    arr.push(i);
}

console.log(arr.join(" "));
