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

const navLinks = document.querySelectorAll(".nav-item");
const navContainer = document.querySelector(".nav-links"); // Added to target the wrapper

// CLICK TO SECTION
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// ACTIVE NAV ON SCROLL
window.addEventListener("scroll", () => {
    let currentSection = "";

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (section) {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = link.getAttribute("href");
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === currentSection) {
            link.classList.add("active");
            
            // --- NEW LOGIC TO SHIFT NAVBAR ---
            link.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
            // ---------------------------------
        }
    });
});