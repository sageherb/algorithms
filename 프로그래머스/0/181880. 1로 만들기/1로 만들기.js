function solution(num_list) {
    let count = 0;
    const cb = x => x !== 1;
    
    while (num_list.some(cb)) {
        for(let i = 0; i < num_list.length; i++) {
            if (num_list[i] === 1) continue;
            const target = num_list[i];
            num_list[i] = target % 2 === 0 ? target / 2 : (target - 1) / 2;
            count++;
        }
    }
    return count;
}