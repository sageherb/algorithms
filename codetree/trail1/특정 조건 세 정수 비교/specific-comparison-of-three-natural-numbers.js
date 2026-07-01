const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().split(" ");
a = Number(a);
b = Number(b);
c = Number(c);

const answer = [];

if (a <= b && a <= c) {
    answer.push(1);
} else {
    answer.push(0);
}

if (a === b && b === c && a === c) {
    answer.push(1);
} else {
    answer.push(0);
}

console.log(answer.join(" "));
