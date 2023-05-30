import { retrieveLocalStorage } from "./retrieveLocalStorage.js";
import { EventData } from "../types/eventData.js";
import { getDatesInRange } from "./createEvent.js";
import { createDayEvent } from "./createDayEvents.js";

export function recreateEvents(): void {
  const eventsData: EventData[] = retrieveLocalStorage() as EventData[];
  eventsData.forEach((element: EventData) => {
    const eventDate = `${element.eventYear}-0${element.eventMonth}-${element.eventDay}`;
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
        createDayEvent(element, eventColor, targetDate, eventDate);
      }
    } else if (dateArray.length > 0) {
      dateArray.forEach((day: string) => {
        const targetDay = document.querySelector(`[data-daynumber="${day}"]`) as HTMLDivElement;
        if (targetDay) {
          createDayEvent(element, eventColor, targetDay, eventDate);
        }
      });
    }
  });
  const prevMonth = document.querySelector("#prevMonth") as HTMLElement;
  prevMonth.addEventListener("click", recreateEvents);
  const nextMonth = document.querySelector("#nextMonth") as HTMLElement;
  nextMonth.addEventListener("click", recreateEvents);
}
