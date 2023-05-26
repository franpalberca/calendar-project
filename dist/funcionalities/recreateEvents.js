import { retrieveLocalStorage } from "./retrieveLocalStorage.js";
import { getDatesInRange } from "./createEvent.js";
export function recreateEvents() {
    const eventsData = retrieveLocalStorage();
    eventsData.forEach((element) => {
        const eventDate = (`${element.eventYear}-0${element.eventMonth}-${element.eventDay}`);
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
                const dayEvent = createDayEvent(element, eventColor, targetDate, eventDate);
                showContentDetailsHover(dayEvent, element);
                dayEvent.setAttribute("id", "dayEvent");
                dayEvent.setAttribute("class", `row d-flex justify-content-center ${eventColor} bg-gradient mb-1 day-event-dropdown overflow-hidden`);
                dayEvent.setAttribute("style", "font-size: 12px; color: black;");
                dayEvent.innerText = `${element.name}`;
                dayEvent.setAttribute("data-startHour", `${element.eventHour}:${element.eventMinutes}`);
                dayEvent.setAttribute("data-endHour", `${element.eventHourF}:${element.eventMinutesF}`);
                dayEvent.setAttribute("data-description", `${element.description}`);
                dayEvent.setAttribute("data-eventType", `${element.eventType}`);
                targetDate.appendChild(dayEvent);
            }
        }
        else if (dateArray.length > 0) {
            dateArray.forEach((day) => {
                const targetDay = document.querySelector(`[data-daynumber="${day}"]`);
                if (targetDay) {
                    const dayEvent = createDayEvent(element, eventColor, targetDay, eventDate);
                    showContentDetailsHover(dayEvent, element);
                }
            });
        }
    });
    const prevMonth = document.querySelector("#prevMonth");
    prevMonth.addEventListener("click", recreateEvents);
    const nextMonth = document.querySelector("#nextMonth");
    nextMonth.addEventListener("click", recreateEvents);
}
function createDayEvent(element, eventColor, targetDay, date) {
    const dayEvent = document.createElement("div");
    dayEvent.setAttribute("id", "dayEvent");
    dayEvent.setAttribute("class", `row d-flex justify-content-center ${eventColor} bg-gradient mb-1 day-event-dropdown`);
    dayEvent.setAttribute("style", "font-size: 12px; color: black;");
    dayEvent.innerText = `${element.name}`;
    dayEvent.setAttribute("data-startHour", `${element.eventHour}:${element.eventMinutes}`);
    dayEvent.setAttribute("data-endHour", `${element.eventHourF}:${element.eventMinutesF}`);
    dayEvent.setAttribute("data-description", `${element.description}`);
    dayEvent.setAttribute("data-eventType", `${element.eventType}`);
    dayEvent.setAttribute("data-day", date);
    dayEvent.setAttribute("data-name", element.name);
    dayEvent.setAttribute("data-reminder", `${element.reminder}`);
    targetDay.appendChild(dayEvent);
    return dayEvent;
}
function showContentDetailsHover(dayEvent, element) {
    const eventHoverDetails = document.createElement("div");
    eventHoverDetails.setAttribute("class", "d-flex flex-column justify-content-start align-items-between");
    dayEvent.appendChild(eventHoverDetails);
    const eventDetailsEventStart = document.createElement("p");
    eventDetailsEventStart.textContent = `Starts on ${element.eventDay}, ${element.eventHour}:${element.eventMinutes}`;
    eventDetailsEventStart.setAttribute("class", "d-flex event-hover-hour-start");
    eventHoverDetails.appendChild(eventDetailsEventStart);
    const eventDetailsEventFinish = document.createElement("p");
    eventDetailsEventFinish.textContent = `Finish on: ${element.eventDayF}, ${element.eventHourF}:${element.eventMinutesF}`;
    eventDetailsEventFinish.setAttribute("class", "d-flex event-hover-hour-finish");
    eventHoverDetails.appendChild(eventDetailsEventFinish);
    const eventDetailsDescription = document.createElement("p");
    eventDetailsDescription.textContent = `Description: ${element.description}`;
    eventDetailsDescription.setAttribute("class", "d-flex event-hover-details");
    eventHoverDetails.appendChild(eventDetailsDescription);
}
//# sourceMappingURL=recreateEvents.js.map