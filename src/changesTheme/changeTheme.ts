export function changeThemeAddEvent() {
  const lightBtn = document.querySelector('[data-bs-theme-value="light') as HTMLButtonElement;
  const darkBtn = document.querySelector('[data-bs-theme-value="dark') as HTMLButtonElement;
  const autoBtn = document.querySelector('[data-bs-theme-value="auto') as HTMLButtonElement;
  const bodyTheme = document.getElementById('bodyContainer') as HTMLBodyElement;
  const generalContainer = document.getElementById('generalContainer') as HTMLDivElement;
  lightBtn.addEventListener("click", () => {
    changeTheme("light");
    bodyTheme.classList.remove("dark");
    generalContainer.classList.remove("dark");
    lightBtn.classList.add("active")
    darkBtn.classList.remove("active")
    autoBtn.classList.remove("active")
  });
  darkBtn.addEventListener("click", () => {
    changeTheme("dark");    
    bodyTheme.classList.add("dark");
    generalContainer.classList.add("dark");
    lightBtn.classList.remove("active")
    darkBtn.classList.add("active")
    autoBtn.classList.remove("active")
  });
  autoBtn.addEventListener("click", () => {
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 8 && currentHour < 18;
    const theme = isDayTime? "light" : "dark";
    changeTheme(theme);
    bodyTheme.classList.toggle("dark", theme === "dark");
    generalContainer.classList.toggle("dark", theme === "dark");
    lightBtn.classList.remove("active")
    darkBtn.classList.remove("active")
    autoBtn.classList.add("active")

  });
}
function changeTheme(theme: string) {
    const html = document.getElementById("htmlTheme") as HTMLElement;
    html.setAttribute("data-bs-theme", theme);
}