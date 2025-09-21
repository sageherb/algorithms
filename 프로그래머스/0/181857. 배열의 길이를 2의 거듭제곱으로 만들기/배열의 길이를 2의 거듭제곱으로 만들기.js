function solution(arr) {
    if (arr.length === 1) return arr;
    let pow = 2;
    let newArr = [...arr];
    
    while (newArr.length > pow) {
        pow *= 2;
        
        if (newArr.length === pow) continue;
        
        newArr = newArr.concat(Array.from({length: pow - newArr.length}).fill(0));
        
    }
    
    return newArr;
}