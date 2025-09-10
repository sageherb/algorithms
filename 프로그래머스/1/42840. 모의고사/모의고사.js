function solution(answers) {
    const s1 = [1, 2, 3, 4, 5];
    const s2 = [1, 3, 4, 5];
    const s3 = [3, 1, 2, 4, 5];
    const map = {};
    
    answers.map((v, i) => {
        const idx1 = i % s1.length;
        const idx2 = Math.floor(i % (s2.length * 2) / 2);
        const idx3 = Math.floor(i % (s3.length * 2) / 2);
        
        const v1 = s1[idx1];
        const v2 = i % 2 === 0 ? 2 : s2[idx2];
        const v3 = s3[idx3];
        
        if (v === v1) map[1] = (map[1] || 0) + 1;
        if (v === v2) map[2] = (map[2] || 0) + 1;
        if (v === v3) map[3] = (map[3] || 0) + 1;
    });
    
    const max = Math.max(...Object.values(map));
    const result = [];
    
    for (const k in map) {
        if (map[k] === max) result.push(Number(k));
    }
    
    return result;
}