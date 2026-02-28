const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function is369(n) {
    const str = n.toString();
    return str.includes("3") || str.includes("6") || str.includes("9");
}

function solution(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (is369(i) || i % 3 === 0) {
            count++;
        }
    }
    return count;
}

console.log(solution(A, B));
