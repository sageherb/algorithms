const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ");
a = Number(a);
b = Number(b);

if (a < 90 || b < 90) {
    console.log(0);
} else if (b >= 95) {
    console.log(100000);
} else if (b >= 90) {
    console.log(50000);
}
