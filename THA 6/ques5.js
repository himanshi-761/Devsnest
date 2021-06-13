function maxoccur(arr) {
    arr.sort
    let n = arr.length
    var c, max = 0;
    var ch = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] == arr[i]) {
            c++;
        } else {
            if (c > max) {
                max = c;
                ch = arr[i - 1];
            }
            c = 1;
        }
    }
    console.log(ch, "(", max, ")");
}
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
maxoccur(arr1);