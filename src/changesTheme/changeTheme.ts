export function changeThemeAddEvent() {
  const lightBtn = document.querySelector('[data-bs-theme-value="light') as HTMLButtonElement;
  const darkBtn = document.querySelector('[data-bs-theme-value="dark') as HTMLButtonElement;
  const autoBtn = document.querySelector('[data-bs-theme-value="auto') as HTMLButtonElement;
  const mainTheme = document.getElementById('mainContainer') as HTMLElement;
  lightBtn.addEventListener("click", () => {
    changeTheme("light");
    mainTheme.classList.remove("dark");
    lightBtn.classList.add("active")
    darkBtn.classList.remove("active")
    autoBtn.classList.remove("active")
  });
  darkBtn.addEventListener("click", () => {
    changeTheme("dark");    
    mainTheme.classList.add("dark");
    lightBtn.classList.remove("active")
    darkBtn.classList.add("active")
    autoBtn.classList.remove("active")
  });
  autoBtn.addEventListener("click", () => {
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 8 && currentHour < 18;
    const theme = isDayTime? "light" : "dark";
    changeTheme(theme);
    lightBtn.classList.remove("active")
    darkBtn.classList.remove("active")
    autoBtn.classList.add("active")

  });
}
function changeTheme(theme: string) {
    const html = document.getElementById("htmlTheme") as HTMLElement;
    html.setAttribute("data-bs-theme", theme);
}