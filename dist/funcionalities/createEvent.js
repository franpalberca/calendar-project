import { retrieveEventData } from "./retrieveEventData.js";
import { restartEventForm } from "./restartEventForm.js";
import { createDayEvent } from "./createDayEvents.js";
export function setEvent() {
    const eventData = retrieveEventData();
    let eventColor = '';
    const eventDate = new Date(`${eventData.eventYear}-${eventData.eventMonth}-${eventData.eventDay}`).toISOString().slice(0, 10);
    const eventFinishDate = `${eventData.eventYearF}-${eventData.eventMonthF}-${eventData.eventDayF}`;
    const dateArray = getDatesInRange(eventDate, eventFinishDate);
    switch (eventData.eventType) {
        case 'default':
            eventColor = "bg-primary";
            break;
        case 'work':
            eventColor = "work-event";
            break;
        case 'family':
            eventColor = "family-event";
            break;
        case 'friends':
            eventColor = "friends-event";
            break;
        case 'doctor':
            eventColor = "doctor-event";
            break;
        case 'private':
            eventColor = "private-event";
            break;
    }
    if (dateArray.length === 0) {
        const targetDay = document.querySelector(`[data-daynumber="${eventDate}"]`);
        if (targetDay) {
            createDayEvent(eventData, eventColor, targetDay, eventDate);
        }
    }
    else if (dateArray.length > 0) {
        dateArray.forEach((day) => {
            const targetDay = document.querySelector(`[data-daynumber="${day}"]`);
            if (targetDay) {
                createDayEvent(eventData, eventColor, targetDay, eventDate);
            }
        });
    }
    const closeBtn = document.querySelector('#closeBtn');
    if (closeBtn) {
        closeBtn.click();
        restartEventForm();
    }
}
export function getDatesInRange(startDate, endDate) {
    const dateArray = [];
    const currentDate = new Date(startDate);
    const finishDate = new Date(endDate);
    while (currentDate <= finishDate) {
        dateArray.push(currentDate.toISOString().slice(0, 10));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
}
//# sourceMappingURL=createEvent.js.map