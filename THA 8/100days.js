const container = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
    let element = document.createElement("div");
    element.classList.add("box");
    element.classList.add("active");
    container.appendChild(element);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) =>
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    })
);