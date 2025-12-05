const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "tnt-theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
}

// Load saved theme on page load
const savedTheme = localStorage.getItem("tnt-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}
