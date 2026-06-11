const fs = require("fs");
let score = fs.readFileSync(0).toString().trim();
score = Number(score);

console.log(score === 100 ? "pass" : "failure");
