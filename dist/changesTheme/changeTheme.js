export function changeThemeAddEvent() {
    const lightBtn = document.querySelector('[data-bs-theme-value="light');
    const darkBtn = document.querySelector('[data-bs-theme-value="dark');
    const autoBtn = document.querySelector('[data-bs-theme-value="auto');
    const mainTheme = document.getElementById('mainContainer');
    lightBtn.addEventListener("click", () => {
        changeTheme("light");
        mainTheme.classList.remove("dark");
        lightBtn.classList.add("active");
        darkBtn.classList.remove("active");
        autoBtn.classList.remove("active");
    });
    darkBtn.addEventListener("click", () => {
        changeTheme("dark");
        mainTheme.classList.add("dark");
        lightBtn.classList.remove("active");
        darkBtn.classList.add("active");
        autoBtn.classList.remove("active");
    });
    autoBtn.addEventListener("click", () => {
        const currentHour = new Date().getHours();
        const isDayTime = currentHour >= 8 && currentHour < 18;
        const theme = isDayTime ? "light" : "dark";
        changeTheme(theme);
        lightBtn.classList.remove("active");
        darkBtn.classList.remove("active");
        autoBtn.classList.add("active");
    });
}
function changeTheme(theme) {
    const html = document.getElementById("htmlTheme");
    html.setAttribute("data-bs-theme", theme);
}
//# sourceMappingURL=changeTheme.js.map