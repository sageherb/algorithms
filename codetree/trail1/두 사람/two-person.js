const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split("\n");
let [aa, ag] = a.split(" ");
let [ba, bg] = b.split(" ");
aa = Number(aa);
ba = Number(ba);

if ((aa >= 19 && ag === "M") || (ba >= 19 && bg === "M")) {
    console.log(1);
} else {
    console.log(0);
}
