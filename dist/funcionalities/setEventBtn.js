import { setEvent } from './createEvent.js';
export function setEventBtn() {
    const createEventForm = document.querySelector('#createEventForm');
    createEventForm === null || createEventForm === void 0 ? void 0 : createEventForm.addEventListener("submit", (event) => {
        event.preventDefault();
        setEvent();
    });
}
//# sourceMappingURL=setEventBtn.js.map