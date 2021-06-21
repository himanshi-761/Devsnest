const box = document.querySelector(".boxcontainer");
for (var i = 0; i < 100; i++) {
    let a = document.createElement('div');
    a.classList.add("inner");
    a.classList.add("box");
    box.appendChild(a);
}
const v = document.querySelector(".inner");
v.forEach((inner) =>
    a.addEventListener(click, () => {
        a.classList.toggle('.boxclicked');
    }))