const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split("\n");
let [am, ae] = a.split(" ");
am = Number(am);
ae = Number(ae);
let [bm, be] = b.split(" ");
bm = Number(bm);
be = Number(be);

console.log(am > bm && ae > be ? 1 : 0);
