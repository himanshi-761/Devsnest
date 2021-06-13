function joinArray(arr, delim) {
    return arr.join(delim);
}
let myColor = ["Red", "Green", "White", "Black"];
console.log(joinArray(myColor, " "))
console.log(joinArray(myColor, ","))
console.log(joinArray(myColor, ""))