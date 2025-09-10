function solution(sizes) {
    let max = 0;
    let min = 0;
    sizes.map(([w, h]) => {
        max = Math.max(max, Math.max(w, h));
        min = Math.max(min, Math.min(w, h));
    });
    
    return max * min;
}