function solution(myString, pat) {
    let count = 0;
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === pat[0]) {
            const result = [...pat].every((x, idx) => myString[i + idx] === x);
            if (result) count++;
        }
    }
    
    return count;
}