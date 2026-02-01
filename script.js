// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (saves preference)
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

function setTheme(mode) {
  if (mode === "light") {
    root.classList.add("light");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    root.classList.remove("light");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

const saved = localStorage.getItem("theme");
setTheme(saved || "dark");

toggleBtn.addEventListener("click", () => {
  const isLight = root.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});
