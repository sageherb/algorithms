function solution(myString, pat) {
    return [...myString].map(x => {
        if (x === "A") return "B";
        return "A";
    }).join("").includes(pat) ? 1 : 0;
}