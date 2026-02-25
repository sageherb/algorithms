const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function gcd(a, b) {
    while (b !== 0) {
        const r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcm(n, m) {
    if (n === 0 || m === 0) return 0;
    return (n / gcd(n, m) * m);
}

const result = lcm(n, m);
console.log(result);
