const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().split(" ");
a = Number(a);
b = Number(b);
c = Number(c);

if (a < b && b < c) {
    console.log(1);
} else {
    console.log(0);
}
