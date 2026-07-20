const fs = require("fs");
let [b, a] = fs.readFileSync(0).toString().split(" ");
b = Number(b);
a = Number(a);

const arr = [];

for(let i = b; i >= a; i--) {
    if (i % 2 !== 0) arr.push(i);
}

console.log(arr.join(" "));
