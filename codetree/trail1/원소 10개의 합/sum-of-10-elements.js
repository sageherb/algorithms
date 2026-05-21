const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ");

const sum = arr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
console.log(sum);