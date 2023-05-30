import {modifyCreatedEvent} from "./modifyEvent.js";

export function loadEventModal(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  if (target) {
    const eventName: string = target.getAttribute("data-name") as string;
    const eventType = target.getAttribute("data-eventtype") as string;
    const eventStartHour = target.getAttribute("data-starthour") as string;
    const eventFinishHour = target.getAttribute("data-endhour") as string;
    const eventDescription = target.getAttribute("data-description") as string;
    const eventReminder = target.getAttribute("data-reminder") as string;
    const eventDay = target.getAttribute("data-day") as string;
    const multitarget = document.querySelectorAll(`[data-name="${eventName}"]`);

    const eventModalName = document.querySelector("#eventModalName") as HTMLElement;
    eventModalName.innerText = eventName;
    const eventModalType = document.querySelector("#eventModalType") as HTMLElement;
    eventModalType.innerText = eventType;

    const eventStartHModal = document.querySelector("#eventStartHModal") as HTMLElement;
    eventStartHModal.innerText = eventStartHour.length === 4 ? `${eventStartHour}0` : eventStartHour;

    const eventFinishHModal = document.querySelector("#eventFinishHModal") as HTMLElement;
    eventFinishHModal.innerText = eventFinishHour === "null:null" ? `Your event finishes today` : `Your event finishes at ${eventFinishHour}`;

    const eventDescriptionModal = document.querySelector("#eventDescriptionModal") as HTMLElement;
    eventDescriptionModal.innerText = eventDescription === "" ? `No description was provided for this event` : `${eventDescription}`;

    const eventReminderModal = document.querySelector("#eventReminderModal") as HTMLElement;
    eventReminderModal.innerText = eventReminder === "default" ? `No time of reminder was provided for this event` : `You will be reminded about this event at ${eventReminder}`;

    const deleteEventModal = document.querySelector("#deleteEventModal") as HTMLButtonElement;
    deleteEventModal.addEventListener("click", () => {
            const response = confirm('¿Are you sure you want to delete this event?');
            if(response){
      multitarget.forEach(target => {
      target.remove();
    })
      localStorage.removeItem(`Event: ${eventName}`);
      const closeEventModal = document.querySelector("#closeEventModal") as HTMLButtonElement;
      closeEventModal.click();
            }
    });
    const modifyEventModal = document.querySelector("#modifyEventModal") as HTMLButtonElement;
    modifyEventModal.addEventListener("click", () => {
      modifyCreatedEvent(eventName, eventType, eventStartHour, eventFinishHour, eventDescription, eventReminder, eventDay, multitarget);
    });
  }
}
