const fs = require("fs");
const arr = fs.readFileSync(0).toString().split("\n");

const count = arr.reduce((acc, cur) => {
    const [cold, temp] = cur.split(" ");
    
    if (cold === "Y" && Number(temp) >= 37) {
        acc += 1;
    }

    return acc;
}, 0);

if (count >= 2) {
    console.log("E");
} else {
    console.log("N");
}
