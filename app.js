const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY > 60)
})