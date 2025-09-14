function solution(arr) {
    let prev = [];
    let cur = [...arr];
    let count = 0;
    let flag = true;
    
    while (flag) {
        prev = [...cur];
        cur = prev.map(x => {
            if (x >= 50 && x % 2 === 0) return x / 2;
            if (x < 50 && x % 2 !== 0) return x * 2 + 1;
            return x;
        });
        if (cur.every((x, i) => prev[i] === x)) {
            flag = false;
            continue
        }
        count++;
    }
    
    return count;
}