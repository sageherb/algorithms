const fs = require("fs");
let [h, w] = fs.readFileSync(0).toString().split(" ");
h = Number(h);
w = Number(w);

b = (10000 * w) / (h * h);

console.log(parseInt(b));
if (b >= 25) {
    console.log("Obesity");
}
