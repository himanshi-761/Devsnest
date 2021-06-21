const box = document.querySelector(".boxcontainer");
for (var i = 0; i < 100; i++) {
    let a = document.createElement('div');
    a.classList.add("inner");
    box.appendChild(a);
}
box.addEventListener(click, () => {
    if (box.classList.contains('.boxclicked')) {
        box.classList.remove('.boxclicked')
    } else {
        box.classList.add('boxclicked');
    }
})