import { setEvent } from './retrieveEventData.js';

export function setEventBtn(){
    const createEventForm = document.querySelector('#createEventForm');
    createEventForm?.addEventListener("submit", (event) =>{
        event.preventDefault();
        setEvent();
    })
}
