import { retrieveLocalStorage } from "./retrieveLocalStorage.js";
import { EventData } from "../types/eventData.js";
import { getDatesInRange } from "./createEvent.js";
import { retrieveEventData } from "./retrieveEventData.js";

export function recreateEvents(): void {
  const eventsData: EventData[] = retrieveLocalStorage() as EventData[];
  eventsData.forEach((element: EventData) => {
    const eventDate = new Date(`${element.eventYear}-${element.eventMonth}-${element.eventDay}`).toISOString().slice(0, 10);
    const eventDateFinish = `${element.eventYearF}-${element.eventMonthF}-${element.eventDayF}`;

    const dateArray = getDatesInRange(eventDate, eventDateFinish);


    let eventColor = "";
    switch (element.eventType) {
      case "default":
        eventColor = "bg-primary";
        break;
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
      const targetDate = document.querySelector(`[data-daynumber="${eventDate}"]`) as HTMLDivElement;
      if (targetDate) {
        const dayEvent = createDayEvent(element, eventColor, targetDate, eventDate);
        showContentDetailsHover(dayEvent, element);
        dayEvent.setAttribute("id", "dayEvent");
        dayEvent.setAttribute("class", `row d-flex justify-content-center ${eventColor} bg-gradient mb-1 day-event-dropdown overflow-hidden`);
        dayEvent.setAttribute("style", "font-size: 12px; color: black;");
        dayEvent.innerText = `${element.name}`;

        // DATA ATTRIBUTES (WE CAN USE THIS TO CREATE THE MODAL OR HOVER AS AN EXTRA)
        dayEvent.setAttribute("data-startHour", `${element.eventHour}:${element.eventMinutes}`);
        dayEvent.setAttribute("data-endHour", `${element.eventHourF}:${element.eventMinutesF}`);
        dayEvent.setAttribute("data-description", `${element.description}`);
        dayEvent.setAttribute("data-eventType", `${element.eventType}`);

        targetDate.appendChild(dayEvent);

      }
    } else if (dateArray.length > 0) {
      dateArray.forEach((day: string) => {
        const targetDay = document.querySelector(`[data-daynumber="${day}"]`) as HTMLDivElement;
        if (targetDay) {
           const dayEvent = createDayEvent(element, eventColor, targetDay, eventDate);
           showContentDetailsHover(dayEvent, element);
        }
      });
    }
  });
  const prevMonth = document.querySelector("#prevMonth") as HTMLElement;
  prevMonth.addEventListener("click", recreateEvents);
  const nextMonth = document.querySelector("#nextMonth") as HTMLElement;
  nextMonth.addEventListener("click", recreateEvents);
}

function createDayEvent(element: EventData, eventColor: string, targetDay: HTMLDivElement, date: string): HTMLDivElement {
    const dayEvent = document.createElement("div");
          dayEvent.setAttribute("id", "dayEvent");
          dayEvent.setAttribute("class", `row d-flex justify-content-center ${eventColor} bg-gradient mb-1 day-event-dropdown`);
          dayEvent.setAttribute("style", "font-size: 12px; color: black;");
          dayEvent.innerText = `${element.name}`;

          // DATA ATTRIBUTES (WE CAN USE THIS TO CREATE THE MODAL OR HOVER AS AN EXTRA)
          dayEvent.setAttribute("data-startHour", `${element.eventHour}:${element.eventMinutes}`);
          dayEvent.setAttribute("data-endHour", `${element.eventHourF}:${element.eventMinutesF}`);
          dayEvent.setAttribute("data-description", `${element.description}`);
          dayEvent.setAttribute("data-eventType", `${element.eventType}`);
          dayEvent.setAttribute("data-day", date);
          dayEvent.setAttribute("data-name", element.name);
          dayEvent.setAttribute("data-reminder",`${element.reminder}`);

          targetDay.appendChild(dayEvent);
          return dayEvent
}

function showContentDetailsHover(dayEvent: HTMLDivElement, element: EventData) {



  const eventHoverDetails = document.createElement("div") as HTMLDivElement;
  eventHoverDetails.setAttribute("class", "d-flex flex-column justify-content-start align-items-between");
  dayEvent.appendChild(eventHoverDetails);

  const eventDetailsEventStart = document.createElement("p") as HTMLParagraphElement;
  eventDetailsEventStart.textContent = `Starts on ${element.eventDay}, ${element.eventHour}:${element.eventMinutes}`;
  eventDetailsEventStart.setAttribute("class", "d-flex event-hover-hour-start");
  eventHoverDetails.appendChild(eventDetailsEventStart);

  const eventDetailsEventFinish = document.createElement("p") as HTMLParagraphElement;
  eventDetailsEventFinish.textContent = `Finish on: ${element.eventDayF}, ${element.eventHourF}:${element.eventMinutesF}`;
  eventDetailsEventFinish.setAttribute("class", "d-flex event-hover-hour-finish");
  eventHoverDetails.appendChild(eventDetailsEventFinish);

  const eventDetailsDescription = document.createElement("p") as HTMLParagraphElement;
  eventDetailsDescription.textContent = `Description: ${element.description}`;
  eventDetailsDescription.setAttribute("class", "d-flex event-hover-details");
  eventHoverDetails.appendChild(eventDetailsDescription);

}
