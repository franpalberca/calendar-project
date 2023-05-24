export function changeThemeAddEvent() {
  const lightBtn = document.querySelector('[data-bs-theme-value="light') as HTMLButtonElement;
  const darkBtn = document.querySelector('[data-bs-theme-value="dark') as HTMLButtonElement;
  const autoBtn = document.querySelector('[data-bs-theme-value="auto') as HTMLButtonElement;
  const mainTheme = document.getElementById('mainContainer') as HTMLElement;
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
    const theme = isDayTime? "light" : "dark";
    changeTheme(theme);

  });
}
function changeTheme(theme: string) {
    const html = document.getElementById("htmlTheme")
    html?.setAttribute("data-bs-theme", theme);
}