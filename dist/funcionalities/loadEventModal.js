import { modifyCreatedEvent } from "./modifyEvent.js";
import { transformTime } from "./transformTime.js";
export function loadEventModal(event) {
    const target = event.currentTarget;
    if (target) {
        const eventName = target.getAttribute("data-name");
        const eventType = target.getAttribute("data-eventtype");
        const eventStartHour = target.getAttribute("data-starthour");
        const eventFinishHour = target.getAttribute("data-endhour");
        const eventDescription = target.getAttribute("data-description");
        const eventReminder = target.getAttribute("data-reminder");
        const eventDay = target.getAttribute("data-day");
        const multitarget = document.querySelectorAll(`[data-name="${eventName}"]`);
        const eventModalName = document.querySelector("#eventModalName");
        eventModalName.innerText = eventName;
        const eventModalType = document.querySelector("#eventModalType");
        eventModalType.innerText = eventType;
        const eventStartHModal = document.querySelector("#eventStartHModal");
        eventStartHModal.innerText = transformTime(eventStartHour);
        const eventFinishHModal = document.querySelector("#eventFinishHModal");
        eventFinishHModal.innerText = eventFinishHour === "null:null" ? `Your event finishes today` : `Your event finishes at ${transformTime(eventFinishHour)}`;
        const eventDescriptionModal = document.querySelector("#eventDescriptionModal");
        eventDescriptionModal.innerText = eventDescription === "" ? `No description was provided for this event` : `${eventDescription}`;
        const eventReminderModal = document.querySelector("#eventReminderModal");
        eventReminderModal.innerText = eventReminder === "default" ? `No time of reminder was provided for this event` : `You will be reminded about this event at ${eventReminder}`;
        const deleteEventModal = document.querySelector("#deleteEventModal");
        deleteEventModal.addEventListener("click", () => {
            const response = confirm('¿Are you sure you want to delete this event?');
            if (response) {
                multitarget.forEach(target => {
                    target.remove();
                });
                localStorage.removeItem(`Event: ${eventName}`);
                const closeEventModal = document.querySelector("#closeEventModal");
                closeEventModal.click();
            }
        });
        const modifyEventModal = document.querySelector("#modifyEventModal");
        modifyEventModal.addEventListener("click", () => {
            modifyCreatedEvent(eventName, eventType, eventStartHour, eventFinishHour, eventDescription, eventReminder, eventDay, multitarget);
        });
    }
}
//# sourceMappingURL=loadEventModal.js.map