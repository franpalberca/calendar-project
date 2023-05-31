function updateYear() {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("yearUpdateFooter");
  if (yearElement) {
    yearElement.textContent = currentYear.toString();
  }
}
window.addEventListener("DOMContentLoaded", updateYear);
