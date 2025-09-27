function solution(num_str) {
    return [...num_str].map(x => Number(x)).reduce((acc, cur) => acc + cur ,0);
}