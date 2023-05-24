export function changeThemeAddEvent() {
    const lightBtn = document.querySelector('[data-bs-theme-value="light');
    const darkBtn = document.querySelector('[data-bs-theme-value="dark');
    const autoBtn = document.querySelector('[data-bs-theme-value="auto');
    const mainTheme = document.getElementById('mainContainer');
    lightBtn.addEventListener("click", () => {
        changeTheme("light");
        mainTheme.classList.remove("dark");
    });
    darkBtn.addEventListener("click", () => {
        changeTheme("dark");
        mainTheme.classList.add("dark");
    });
    autoBtn.addEventListener("click", () => {
        const currentHour = new Date().getHours();
        const isDayTime = currentHour >= 8 && currentHour < 18;
        const theme = isDayTime ? "light" : "dark";
        changeTheme(theme);
    });
}
function changeTheme(theme) {
    const html = document.getElementById("htmlTheme");
    html === null || html === void 0 ? void 0 : html.setAttribute("data-bs-theme", theme);
}
//# sourceMappingURL=changeTheme.js.map