import { retrieveEventData } from "./retrieveEventData.js";
import { restartEventForm } from "./restartEventForm.js";
import { createDayEvent } from "./createDayEvents.js";

export function setEvent(){
    const eventData = retrieveEventData();
    let eventColor = '';

    const eventDate = new Date(`${eventData.eventYear}-${eventData.eventMonth}-${eventData.eventDay}`).toISOString().slice(0, 10);
    const eventFinishDate = `${eventData.eventYearF}-${eventData.eventMonthF}-${eventData.eventDayF}`

    const dateArray: string[] = getDatesInRange(eventDate, eventFinishDate);

    //Color selectors
    switch (eventData.eventType) {
        case 'work':
            eventColor = "bg-danger";
            break;
        case 'family':
            eventColor = "bg-secondary";
            break;
        case 'friends':
            eventColor = "bg-warning";
            break;
        case 'doctor':
            eventColor = "bg-info";
            break;
        case 'private':
            eventColor = "bg-success";
            break;
    }
    if (dateArray.length === 0) {
        const targetDay = document.querySelector(`[data-daynumber="${eventDate}"]`) as HTMLDivElement;
        if (targetDay) {
            createDayEvent(eventData, eventColor, targetDay, eventDate);
        }
    } else if (dateArray.length > 0) {
        dateArray.forEach((day: string) => {
            const targetDay = document.querySelector(`[data-daynumber="${day}"]`) as HTMLDivElement;
            if (targetDay) {
                createDayEvent(eventData, eventColor, targetDay, eventDate);
            }
        })
    }
    const closeBtn = document.querySelector('#closeBtn') as HTMLButtonElement;
    if (closeBtn){
    closeBtn.click();
    restartEventForm();
    }
}

export function getDatesInRange(startDate: string, endDate: string): string[] {
    const dateArray: string[] = [];
    const currentDate: Date = new Date(startDate);
    const finishDate: Date = new Date(endDate);

    while (currentDate <= finishDate) {
        dateArray.push(currentDate.toISOString().slice(0, 10));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
}
