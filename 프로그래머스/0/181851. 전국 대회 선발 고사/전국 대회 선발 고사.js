function solution(rank, attendance) {
    const arr = rank.filter((x, i) => attendance[i]);
    const [a, b, c] = arr.sort((a, b) => a - b).slice(0, 3);
    
    return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}