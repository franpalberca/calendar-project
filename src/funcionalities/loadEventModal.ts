export function loadEventModal(event: MouseEvent){
    const target = event.currentTarget as HTMLElement;
    if (target) {
        console.log(target);
        const eventName = target.getAttribute('data-name') as string;
        const eventStartHour = target.getAttribute('data-starthour') as string;
        const eventFinishHour = target.getAttribute('data-endhour') as string;
        const eventDescription = target.getAttribute('data-description') as string;
        const eventReminder = target.getAttribute('data-reminder') as string;

        const eventModalName = document.querySelector('#eventModalName') as HTMLElement;
        eventModalName.innerText = eventName;

        const eventStartHModal = document.querySelector('#eventStartHModal') as HTMLElement;
        eventStartHModal.innerText = (eventStartHour.length === 4)?  `${eventStartHour}0` : eventStartHour;

        const eventFinishHModal = document.querySelector('#eventFinishHModal') as HTMLElement;
        eventFinishHModal.innerText = (eventFinishHour === 'null:null') ? `Your event finishes today` : `Your event finishes at ${eventFinishHour}`;

        const eventDescriptionModal = document.querySelector('#eventDescriptionModal') as HTMLElement;
        eventDescriptionModal.innerText = (eventDescription === '') ? `No description was provided for this event` : `${eventDescription}`;

        const eventReminderModal = document.querySelector('#eventReminderModal') as HTMLElement;
        eventReminderModal.innerText = (eventReminder === 'default') ? `No time of reminder was provided for this event` : `You will be reminded about this event at ${eventReminder}`;

        const deleteEventModal = document.querySelector('#deleteEventModal') as HTMLButtonElement;
        deleteEventModal.addEventListener('click',() => {
            target.remove();
            localStorage.removeItem(`Event: ${eventName}`);
            const closeEventModal = document.querySelector('#closeEventModal') as HTMLButtonElement;
            closeEventModal.click();
        })
    }
}
