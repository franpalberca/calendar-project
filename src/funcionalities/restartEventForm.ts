export function restartEventForm(){
    const eventTitle = document.querySelector('#modalTitle') as HTMLInputElement;
    eventTitle.value = "";

    const startDate = document.querySelector('#startDate') as HTMLInputElement;
    startDate.value = "";

    const finishDate = document.querySelector('#finishDate') as HTMLInputElement;
    finishDate.value = "";

    const eventDescription = document.querySelector('#description') as HTMLTextAreaElement;
    eventDescription.value = "";

    const dateEndCheck = document.querySelector('#dateEndCheck') as HTMLInputElement;
    dateEndCheck.checked = false;

    const reminderCheck = document.querySelector('#reminderCheck') as HTMLInputElement;
    reminderCheck.checked = false;

    const eventTypeOpt = document.querySelector('#eventTypeOpt') as HTMLInputElement;
    eventTypeOpt.value = 'default';

    const remindMeOpt = document.querySelector('#remindMeOpt') as HTMLInputElement;
    remindMeOpt.value = 'default';
}
