import { retrieveLocalStorage } from "./retrieveLocalStorage.js";
import { EventData } from "../types/eventData.js";
import { getDatesInRange } from "./createEvent.js";
import { createDayEvent } from "./createDayEvents.js";

export function recreateEvents(): void {
  const eventsData: EventData[] = retrieveLocalStorage() as EventData[];
  eventsData.forEach((element: EventData) => {
    console.log(element);
    const eventDate = `${element.eventYear}-${String(element.eventMonth).padStart(2, '0')}-${String(element.eventDay).padStart(2, '0')}`;
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
      const targetDate = document.querySelector(`[data-daynumber="${eventDate}"]`) as HTMLDivElement;
      console.log(targetDate)
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
