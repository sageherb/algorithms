const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

function print(n) {
    let num = 1;
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
            str += `${num} `;
            num += 1;
            if (num === 10) num = 1;
        }
        console.log(str);
    }
}

print(N);