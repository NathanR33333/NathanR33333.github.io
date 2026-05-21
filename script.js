const year = document.getElementById("year");
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

if (year) {
  year.textContent = new Date().getFullYear();
}

function setTheme(mode) {
  const isLight = mode === "light";

  root.classList.toggle("light", isLight);
  themeLabel.textContent = isLight ? "Dark" : "Light";
  toggleBtn.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme || "dark");

toggleBtn.addEventListener("click", () => {
  setTheme(root.classList.contains("light") ? "dark" : "light");
});
