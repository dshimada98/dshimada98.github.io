(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");
  if (!toggle || !label) return;

  let theme;
  try {
    theme = localStorage.getItem("portfolio-theme");
  } catch {
    theme = null;
  }
  theme ||= window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.dataset.theme = theme;

  const updateToggle = () => {
    const isDark = root.dataset.theme === "dark";
    const nextTheme = isDark ? "light" : "dark";
    label.textContent = `${nextTheme === "dark" ? "Dark" : "Light"} theme`;
    toggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    toggle.setAttribute("aria-pressed", String(isDark));
  };

  updateToggle();
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("portfolio-theme", root.dataset.theme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
    updateToggle();
  });
})();