const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const totalSlides = slide.length;
let index = 0;
let interval;

function showSlide(i) {
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(${-i * 100}%)`;
}

function nextSlide() {
    index++;
    showSlide(index);

    if (index === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = "none";
            index = 0;
            slides.style.transform = `translateX(0)`;
        }, 500);
    }
}

function prevSlide() {
    if (index === 0) {
        index = totalSlides - 2;
        slides.style.transition = "none";
        slides.style.transform = `translateX(${-index * 100}%)`;
        setTimeout(() => {
            slides.style.transition = "transform 0.5s ease-in-out";
            index--;
            showSlide(index);
        }, 20);
    } else {
        index--;
        showSlide(index);
    }
}

next.addEventListener("click", () => {
    nextSlide();
    resetInterval();
});

prev.addEventListener("click", () => {
    prevSlide();
    resetInterval();
});

function autoPlay() {
    interval = setInterval(nextSlide, 3000);
}

function resetInterval() {
    clearInterval(interval);
    autoPlay();
}

autoPlay();

// Dark/Light Mode
const toggleBtn = document.querySelector(".theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});