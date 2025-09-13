function solution(num_list) {
    const sumcb = (acc, cur) => acc + cur;
    const mulcb = (acc, cur) => acc * cur;
    
    return num_list.length > 10 ? num_list.reduce(sumcb, 0) : num_list.reduce(mulcb, 1);
}