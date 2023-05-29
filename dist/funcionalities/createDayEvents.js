export function createDayEvent(element, eventColor, targetDay, date) {
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
    const eventHoverDetails = document.createElement("div");
    eventHoverDetails.setAttribute("class", "d-flex flex-column justify-content-start align-items-between");
    dayEvent.appendChild(eventHoverDetails);
    const eventDetailsEventStart = document.createElement("p");
    eventDetailsEventStart.innerText = `Starts on ${element.eventDay}, ${element.eventHour}:${element.eventMinutes}`;
    eventDetailsEventStart.setAttribute("class", "d-flex event-hover-hour-start");
    eventHoverDetails.appendChild(eventDetailsEventStart);
    if (element.eventDayF !== null) {
        const eventDetailsEventFinish = document.createElement("p");
        eventDetailsEventFinish.textContent = `Finish on: ${element.eventDayF || "Today"}, ${element.eventHourF || " "}:${element.eventMinutesF || " "}`;
        eventDetailsEventFinish.setAttribute("class", "d-flex event-hover-hour-finish");
        eventHoverDetails.appendChild(eventDetailsEventFinish);
    }
    const eventDetailsDescription = document.createElement("p");
    eventDetailsDescription.textContent = `Description: ${element.description}`;
    eventDetailsDescription.setAttribute("class", "d-flex event-hover-details");
    eventHoverDetails.appendChild(eventDetailsDescription);
}
//# sourceMappingURL=createDayEvents.js.map