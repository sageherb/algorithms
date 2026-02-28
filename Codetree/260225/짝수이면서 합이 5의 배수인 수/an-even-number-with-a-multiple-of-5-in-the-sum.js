const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function solution(n) {
    const str = n.toString();
    if (n % 2 === 0 && (Number(str[0]) + Number(str[1])) % 5 === 0) return "Yes";
    return "No";
}

console.log(solution(n));
