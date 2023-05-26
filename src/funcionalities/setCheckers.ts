export function setCheckers() {
  const dateEndCheck = document.querySelector("#dateEndCheck") as HTMLInputElement;
  dateEndCheck.addEventListener("change", checkEndDate);
  function checkEndDate() {
    const reminderBox = document.querySelector("#reminderBox") as HTMLInputElement;
    reminderBox.classList.toggle("d-none");
  }
  const reminderCheck = document.querySelector("#reminderCheck") as HTMLInputElement;
  reminderCheck.addEventListener("change", checkWhenReminder);
  function checkWhenReminder() {
    const rememberWhen = document.querySelector("#rememberWhen") as HTMLInputElement;
    rememberWhen.classList.toggle("d-none");
  }
}
