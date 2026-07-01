const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split("\n");
let [am, ae] = a.split(" ");
let [bm, be] = b.split(" ");
am = Number(am);
ae = Number(ae);
bm = Number(bm);
be = Number(be);

if (am > bm) {
    console.log("A");
} else if (bm > am) {
    console.log("B");
} else if (am === bm && ae > be) {
    console.log("A");
} else if (am === bm && be > ae) {
    console.log("B");
}
