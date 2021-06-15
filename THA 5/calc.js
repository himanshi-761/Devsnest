function calc(val) {
    document.getElementById("fno.").value += val;
}

function solve() {
    let x = document.getElementById("fno.").value
    let y = eval(x)
    document.getElementById("fno.").value = y
}