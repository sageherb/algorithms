function solution(strArr) {
    const map = {};
    
    for (str of strArr) {
        map[str.length] = map[str.length] + 1 || 1; 
    }
    
    let result = 0;
    
    for (k in map) {
        result = Math.max(result, map[k]);
    }
    
    return result;
}