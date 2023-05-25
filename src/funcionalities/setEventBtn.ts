import { setEvent } from './createEvent.js';

export function setEventBtn(){
    const createEventForm = document.querySelector('#createEventForm') as HTMLFormElement;
    createEventForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        setEvent();
    })
}
