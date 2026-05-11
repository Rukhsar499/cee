const slider = document.getElementById("slider");
const container = document.querySelector(".compare-container");
const afterImg = document.querySelector(".compare-img.after");

let isDragging = false;

slider.addEventListener("mousedown", () => isDragging = true);
window.addEventListener("mouseup", () => isDragging = false);

window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let rect = container.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    let percent = (offsetX / rect.width) * 100;

    afterImg.style.width = percent + "%";
    slider.style.left = percent + "%";
});

