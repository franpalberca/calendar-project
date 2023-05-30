import { submitListener } from './setEventBtn.js';
import { setEvent } from './createEvent.js';
export function modifyCreatedEvent(eventName, eventType, eventStartHour, eventFinishHour, eventDescription, eventReminder, eventDay, multitarget) {
    const modalTitle = document.querySelector("#modalTitle");
    const startDate = document.querySelector("#startDate");
    const finishDate = document.querySelector("#finishDate");
    const remindMeOpt = document.querySelector("#remindMeOpt");
    const description = document.querySelector("#description");
    const eventTypeOpt = document.querySelector("#eventTypeOpt");
    const createEventModalTittle = document.querySelector("#createEventModalTittle");
    const dateEndCheck = document.querySelector("#dateEndCheck");
    const reminderCheck = document.querySelector("#reminderCheck");
    createEventModalTittle.innerText = "Modify Event";
    modalTitle.value = eventName;
    eventTypeOpt.value = eventType;
    startDate.value = (eventStartHour.length === 4) ? `${eventDay}T${eventStartHour}0` : `${eventDay}T${eventStartHour}`;
    description.value = `${eventDescription}`;
    if (eventFinishHour !== 'null:null') {
        dateEndCheck.checked = true;
        finishDate.value = `${eventDay}T${eventFinishHour}`;
    }
    if (eventReminder !== 'default') {
        reminderCheck.checked = true;
        remindMeOpt.value = eventReminder;
    }
    const createEventForm = document.querySelector('#createEventForm');
    createEventForm.removeEventListener('submit', submitListener);
    const editListener = (event) => {
        event.preventDefault();
        multitarget.forEach((target) => {
            target.remove();
        });
        localStorage.removeItem(`Event: ${eventName}`);
        setEvent();
        createEventModalTittle.innerText = "Create Event";
        createEventForm.addEventListener("submit", submitListener);
    };
    createEventForm.addEventListener("submit", editListener);
}
//# sourceMappingURL=modifyEvent.js.map