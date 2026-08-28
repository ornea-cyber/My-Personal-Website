const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

function updateTheme(isLight) {
    document.body.classList.toggle("light", isLight);
    themeIcon.className = isLight
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
    themeToggle.setAttribute("aria-pressed", String(isLight));
}

const savedTheme = localStorage.getItem("theme");
updateTheme(savedTheme === "light");

themeToggle.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light");
    updateTheme(isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
});
