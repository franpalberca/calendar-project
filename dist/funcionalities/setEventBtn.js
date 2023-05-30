import { setEvent } from './createEvent.js';
export const submitListener = (event) => {
    event.preventDefault();
    setEvent();
};
export function setEventBtn() {
    const createEventForm = document.querySelector('#createEventForm');
    createEventForm.addEventListener("submit", submitListener);
}
//# sourceMappingURL=setEventBtn.js.map