function first(arr, n) {
    let l = arr.length()
    if (n && n > 0) {
        return arr.slice(0, n)
    }
    return arr;
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));