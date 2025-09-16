function solution(arr, flag) {
    return flag.reduce((acc, cur, i) => {
        if (cur) {
            for (let j = 0; j < arr[i] * 2; j++) {
                acc.push(arr[i]);
            }
        } else {
            for (let j = 0; j < arr[i]; j++) {
                acc.pop();
            }
        }
        return acc;
    }, []);
}
