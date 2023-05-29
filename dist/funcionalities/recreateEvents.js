import { retrieveLocalStorage } from "./retrieveLocalStorage.js";
import { getDatesInRange } from "./createEvent.js";
import { createDayEvent } from "./createDayEvents.js";
export function recreateEvents() {
    const eventsData = retrieveLocalStorage();
    eventsData.forEach((element) => {
        const eventDate = new Date(`${element.eventYear}-${element.eventMonth}-${element.eventDay}`).toISOString().slice(0, 10);
        const eventDateFinish = `${element.eventYearF}-${element.eventMonthF}-${element.eventDayF}`;
        const dateArray = getDatesInRange(eventDate, eventDateFinish);
        let eventColor = "";
        switch (element.eventType) {
            case "work":
                eventColor = "bg-danger";
                break;
            case "family":
                eventColor = "bg-secondary";
                break;
            case "friends":
                eventColor = "bg-warning";
                break;
            case "doctor":
                eventColor = "bg-info";
                break;
            case "private":
                eventColor = "bg-success";
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