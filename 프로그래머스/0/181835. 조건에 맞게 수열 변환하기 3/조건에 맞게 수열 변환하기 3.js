function solution(arr, k) {
    const cb1 = (x) => x * k;
    const cb2 = (x) => x + k;
    
    if (k % 2 === 0) return arr.map(cb2);
    return arr.map(cb1);
}