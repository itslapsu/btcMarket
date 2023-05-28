body = document.querySelector(".body");
nav = document.querySelector(".nav");
burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("no-scroll");
});
