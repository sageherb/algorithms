const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();
a = Number(a);

if (1.0 <= a) {
    console.log("High");
} else if (0.5 <= a) {
    console.log("Middle");
} else {
    console.log("Low");
}
