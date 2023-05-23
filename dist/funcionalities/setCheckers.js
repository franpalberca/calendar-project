export function setCheckers() {
    const dateEndCheck = document.querySelector('#dateEndCheck');
    dateEndCheck === null || dateEndCheck === void 0 ? void 0 : dateEndCheck.addEventListener('change', checkEndDate);
    function checkEndDate() {
        const reminderBox = document.querySelector('#reminderBox');
        reminderBox.classList.toggle("d-none");
    }
    const reminderCheck = document.querySelector('#reminderCheck');
    reminderCheck === null || reminderCheck === void 0 ? void 0 : reminderCheck.addEventListener('change', checkWhenReminder);
    function checkWhenReminder() {
        const rememberWhen = document.querySelector('#rememberWhen');
        rememberWhen.classList.toggle("d-none");
    }
}
//# sourceMappingURL=setCheckers.js.map