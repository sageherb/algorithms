function solution(arr, k) {
    let result = arr.reduce((acc, cur) => {
        if (acc.length >= k) return acc;
        if (!acc.includes(cur)) {
            acc.push(cur);
            return acc;
        }
        return acc;
    }, []);
    
    if (result.length < k) {
        const arr = Array.from({ length: k - result.length }).fill(-1);
        result = result.concat(arr);
    }
    
    return result;
}