function array_Clone(arr) {
    return arr.push(arr);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));