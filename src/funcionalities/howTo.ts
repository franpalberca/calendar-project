const createEventsBtn = document.querySelector("#createEventsBtn") as HTMLButtonElement;
const deleteEventsBtn = document.querySelector("#deleteEventsBtn") as HTMLButtonElement;

export function createEvents():void {
if (createEventsBtn) {
createEventsBtn.addEventListener("click", () => {
    createEventsBtn.setAttribute("data-bs-toggle", "modal")
    createEventsBtn.setAttribute("data-bs-target", "#createModalInfo")
})
}
}

export function deleteEvents():void {
    if (deleteEventsBtn) {
        deleteEventsBtn.addEventListener("click", () => {
            deleteEventsBtn.setAttribute("data-bs-toggle", "modal")
            deleteEventsBtn.setAttribute("data-bs-target", "#deleteModalInfo")
        })
    }
}