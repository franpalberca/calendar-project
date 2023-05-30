const createEventsBtn = document.querySelector("#createEventsBtn");
const deleteEventsBtn = document.querySelector("#deleteEventsBtn");
export function createEvents() {
    if (createEventsBtn) {
        createEventsBtn.addEventListener("click", () => {
            createEventsBtn.setAttribute("data-bs-toggle", "modal");
            createEventsBtn.setAttribute("data-bs-target", "#createModalInfo");
        });
    }
}
export function deleteEvents() {
    if (deleteEventsBtn) {
        deleteEventsBtn.addEventListener("click", () => {
            deleteEventsBtn.setAttribute("data-bs-toggle", "modal");
            deleteEventsBtn.setAttribute("data-bs-target", "#deleteModalInfo");
        });
    }
}
//# sourceMappingURL=howTo.js.map