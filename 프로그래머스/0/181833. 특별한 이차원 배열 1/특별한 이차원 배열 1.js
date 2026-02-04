function solution(n) {
    if (n === 1) return [[1]];
    
    const array = Array.from({ length: n }, (_, i) => {
        const arr = Array.from({ length: n}).fill(0);
        arr[i] = 1;
        return arr;
    });

    
    return array;
}