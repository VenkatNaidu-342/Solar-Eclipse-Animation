document.addEventListener("DOMContentLoaded", function() {
    const starCount = 100;
    const body = document.querySelector("body");

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        body.appendChild(star);
    }
});