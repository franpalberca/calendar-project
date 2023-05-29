import { EventData } from "../types/eventData";
import { loadEventModal } from "./loadEventModal.js";

export function createDayEvent(element: EventData, eventColor: string, targetDay: HTMLDivElement, date: string) {
  const dayEvent = document.createElement("div");
  dayEvent.setAttribute("id", `dayEvent${element.eventHour}:${element.eventMinutes}`);
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
  dayEvent.setAttribute("data-reminder", `${element.reminder}`);
  dayEvent.setAttribute("data-bs-toggle", "modal");
  dayEvent.setAttribute("data-bs-target", "#eventDetailsModal");
  dayEvent.addEventListener("click", loadEventModal);

  targetDay.appendChild(dayEvent);

  //Get all .day-event-dropdown elements and sort them
  const dayEvents = Array.from(targetDay.getElementsByClassName("day-event-dropdown"));
  dayEvents.sort((a, b) => {
    const idA = a.id.substring(9); // Get the ID without "dayEvent"
    const idB = b.id.substring(9); // Get the ID without "dayEvent"
    const timeA = idA.split(":");
    const timeB = idB.split(":");
    const hourA = Number(timeA[0]);
    const minuteA = Number(timeA[1]);
    const hourB = Number(timeB[0]);
    const minuteB = Number(timeB[1]);

    if (hourA !== hourB) {
      return hourA - hourB;
    } else {
      return minuteA - minuteB;
    }
  });

  //Reorder items in targetDay
  dayEvents.forEach((event) => targetDay.appendChild(event));

  const eventHoverDetails = document.createElement("div") as HTMLElement;
  eventHoverDetails.setAttribute("class", "d-flex flex-column justify-content-start align-items-between");
  dayEvent.appendChild(eventHoverDetails);

  const eventDetailsEventStart = document.createElement("p") as HTMLElement;
  eventDetailsEventStart.innerText = `Starts on ${element.eventDay}, ${element.eventHour}:${element.eventMinutes}`;
  eventDetailsEventStart.setAttribute("class", "d-flex event-hover-hour-start");
  eventHoverDetails.appendChild(eventDetailsEventStart);
  if (element.eventDayF !== null) {
    const eventDetailsEventFinish = document.createElement("p") as HTMLParagraphElement;
    eventDetailsEventFinish.textContent = `Finish on: ${element.eventDayF || "Today"}, ${element.eventHourF || " "}:${element.eventMinutesF || " "}`;
    eventDetailsEventFinish.setAttribute("class", "d-flex event-hover-hour-finish");
    eventHoverDetails.appendChild(eventDetailsEventFinish);
  }

  const eventDetailsDescription = document.createElement("p") as HTMLParagraphElement;
  eventDetailsDescription.textContent = `Open to see description`;
  eventDetailsDescription.setAttribute("class", "d-flex event-hover-details");
  eventHoverDetails.appendChild(eventDetailsDescription);
}
