function solution(a, b) {
    const x = BigInt(a);
    const y = BigInt(b);
    
    console.log(x, y);
    
    return String(BigInt(x + y));
}