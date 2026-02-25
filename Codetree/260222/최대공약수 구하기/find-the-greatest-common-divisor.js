const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function gcd(n, m) {
    let num = 1;
    for (let i = 1; i <= 100; i++) {
        if (n % i === 0 && m % i === 0) {
            num = i;
        }
        continue;
    }
    console.log(num);
}

gcd(n, m);