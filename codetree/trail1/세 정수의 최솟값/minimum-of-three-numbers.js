const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().split(" ");
a = Number(a);
b = Number(b);
c = Number(c);

if (a <= b && a <= c) {
    console.log(a);
} else if (b <= a && b <= c) {
    console.log(b);
} else {
    console.log(c);
}
