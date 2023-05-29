export function loadEventModal(event) {
    const target = event.currentTarget;
    if (target) {
        console.log(target);
        const eventName = target.getAttribute('data-name');
        const eventStartHour = target.getAttribute('data-starthour');
        const eventFinishHour = target.getAttribute('data-endhour');
        const eventDescription = target.getAttribute('data-description');
        const eventReminder = target.getAttribute('data-reminder');
        const eventModalName = document.querySelector('#eventModalName');
        eventModalName.innerText = eventName;
        const eventStartHModal = document.querySelector('#eventStartHModal');
        eventStartHModal.innerText = (eventStartHour.length === 4) ? `${eventStartHour}0` : eventStartHour;
        const eventFinishHModal = document.querySelector('#eventFinishHModal');
        eventFinishHModal.innerText = (eventFinishHour === 'null:null') ? `Your event finishes today` : `Your event finishes at ${eventFinishHour}`;
        const eventDescriptionModal = document.querySelector('#eventDescriptionModal');
        eventDescriptionModal.innerText = (eventDescription === '') ? `No description was provided for this event` : `${eventDescription}`;
        const eventReminderModal = document.querySelector('#eventReminderModal');
        eventReminderModal.innerText = (eventReminder === 'default') ? `No time of reminder was provided for this event` : `You will be reminded about this event at ${eventReminder}`;
        const deleteEventModal = document.querySelector('#deleteEventModal');
        deleteEventModal.addEventListener('click', () => {
            target.remove();
            localStorage.removeItem(`Event: ${eventName}`);
            const closeEventModal = document.querySelector('#closeEventModal');
            closeEventModal.click();
        });
    }
}
//# sourceMappingURL=loadEventModal.js.map