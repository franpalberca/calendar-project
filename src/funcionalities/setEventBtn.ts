import { setEvent } from './createEvent.js';
export const submitListener = (event: Event) =>{
    event.preventDefault();
    setEvent();
}
export function setEventBtn(){
    const createEventForm = document.querySelector('#createEventForm') as HTMLFormElement;
    createEventForm.addEventListener("submit", submitListener);
}
