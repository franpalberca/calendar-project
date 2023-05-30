import { submitListener } from './setEventBtn.js'
import { setEvent } from './createEvent.js'

export function modifyCreatedEvent(eventName: string, eventType: string, eventStartHour: string, eventFinishHour:string, eventDescription: string, eventReminder:string, eventDay:string, target: HTMLElement): void {
   const modalTitle = document.querySelector("#modalTitle") as HTMLInputElement;
   const startDate = document.querySelector("#startDate") as HTMLInputElement;
   const finishDate = document.querySelector("#finishDate") as HTMLInputElement;
   const remindMeOpt = document.querySelector("#remindMeOpt") as HTMLInputElement;
   const description = document.querySelector("#description") as HTMLInputElement;
   const eventTypeOpt = document.querySelector("#eventTypeOpt") as HTMLInputElement;
   const createEventModalTittle = document.querySelector("#createEventModalTittle") as HTMLElement;
   const dateEndCheck = document.querySelector("#dateEndCheck") as HTMLInputElement;
   const reminderCheck = document.querySelector("#reminderCheck") as HTMLInputElement;

   createEventModalTittle.innerText = "Modify Event";

   modalTitle.value = eventName;

   eventTypeOpt.value = eventType;

   startDate.value = (eventStartHour.length === 4) ? `${eventDay}T${eventStartHour}0` : `${eventDay}T${eventStartHour}`;

   description.value = `${eventDescription}`;

   if(eventFinishHour !== 'null:null') {
      dateEndCheck.checked = true;
      finishDate.value = `${eventDay}T${eventFinishHour}`;
   }
   if(eventReminder !== 'default') {
      reminderCheck.checked = true;
      remindMeOpt.value = eventReminder;
   }
   const createEventForm = document.querySelector('#createEventForm') as HTMLFormElement;
   createEventForm.removeEventListener('submit', submitListener);
   const editListener = (event: Event) => {
      event.preventDefault();
      target.remove();
      localStorage.removeItem(`Event: ${eventName}`);
      setEvent();
      createEventModalTittle.innerText = "Create Event";
      createEventForm.addEventListener("submit", submitListener);
   }
   createEventForm.addEventListener("submit", editListener);
}
