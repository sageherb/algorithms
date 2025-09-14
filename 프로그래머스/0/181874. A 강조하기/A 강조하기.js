function solution(myString) {
    return [...myString].map((x) => (x === "a" || x === "A") ? "A" : x.toLowerCase()).join("");
}