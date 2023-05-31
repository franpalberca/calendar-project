import { retrieveLocalStorage } from "./retrieveLocalStorage.js";
import { getDatesInRange } from "./createEvent.js";
import { createDayEvent } from "./createDayEvents.js";
export function recreateEvents() {
    const eventsData = retrieveLocalStorage();
    eventsData.forEach((element) => {
        const eventDate = `${element.eventYear}-0${element.eventMonth}-${element.eventDay}`;
        const eventDateFinish = `${element.eventYearF}-${element.eventMonthF}-${element.eventDayF}`;
        const dateArray = getDatesInRange(eventDate, eventDateFinish);
        let eventColor = "";
        switch (element.eventType) {
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
            const targetDate = document.querySelector(`[data-daynumber="${eventDate}"]`);
            if (targetDate) {
                createDayEvent(element, eventColor, targetDate, eventDate);
            }
        }
        else if (dateArray.length > 0) {
            dateArray.forEach((day) => {
                const targetDay = document.querySelector(`[data-daynumber="${day}"]`);
                if (targetDay) {
                    createDayEvent(element, eventColor, targetDay, eventDate);
                }
            });
        }
    });
    const prevMonth = document.querySelector("#prevMonth");
    prevMonth.addEventListener("click", recreateEvents);
    const nextMonth = document.querySelector("#nextMonth");
    nextMonth.addEventListener("click", recreateEvents);
}
//# sourceMappingURL=recreateEvents.js.map