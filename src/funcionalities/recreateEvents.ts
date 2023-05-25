import { retrieveLocalStorage } from './retrieveLocalStorage.js';
import { EventData } from '../types/eventData.js'
import { getDatesInRange } from './createEvent.js'

export function recreateEvents(): void{
    const eventsData: EventData[] = retrieveLocalStorage() as EventData[];
    eventsData.forEach((element: EventData) => {
        const eventDate = new Date(`${element.eventYear}-${element.eventMonth}-${element.eventDay}`).toISOString().slice(0, 10)
        const eventDateFinish = `${element.eventYearF}-${element.eventMonthF}-${element.eventDayF}`;

        const dateArray = getDatesInRange(eventDate, eventDateFinish);
        console.log(dateArray);

        let eventColor = '';
        switch (element.eventType) {
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
        if(dateArray.length === 0) {
            const targetDate = document.querySelector(`[data-daynumber="${eventDate}"]`)
            if (targetDate) {
                const dayEvent = document.createElement("div");
                dayEvent.setAttribute("class",`row d-flex justify-content-center ${eventColor} bg-gradient mb-1 day-event-dropdown overflow-hidden`);
                dayEvent.setAttribute("style","font-size: 12px; color: black;");
                dayEvent.innerText = `${element.name}`;

                // Data attributes (Puedes usar esto para hacer el modal o el hover, extra)
                dayEvent.setAttribute("data-startHour",`${element.eventHour}:${element.eventMinutes}`);
                dayEvent.setAttribute("data-endHour",`${element.eventHourF}:${element.eventMinutesF}`);
                dayEvent.setAttribute("data-description", `${element.description}`);
                dayEvent.setAttribute("data-eventType", `${element.eventType}`);

                targetDate.appendChild(dayEvent);

                const eventHoverDetails = document.createElement("div") as HTMLDivElement;
                eventHoverDetails.setAttribute("class", "d-flex flex-column justify-content-start align-items-between");
                dayEvent.appendChild(eventHoverDetails);
                const eventDetailsEventStart = document.createElement("p") as HTMLParagraphElement;
                eventDetailsEventStart.textContent= `${element.eventHour}:${element.eventMinutes}`;
                eventDetailsEventStart.setAttribute("class", "d-flex event-hover-hour-start")
                eventHoverDetails.appendChild(eventDetailsEventStart);                
                const eventDetailsEventFinish = document.createElement("p") as HTMLParagraphElement;
                eventDetailsEventFinish.textContent= `${element.eventHourF}:${element.eventMinutesF}`;
                eventDetailsEventFinish.setAttribute("class", "d-flex event-hover-hour-finish")
                eventHoverDetails.appendChild(eventDetailsEventFinish);
                console.log(eventDetailsEventFinish);
                const eventDetailsDescription = document.createElement("p") as HTMLParagraphElement;
                eventDetailsDescription.textContent= `${element.description}`;
                eventDetailsDescription.setAttribute("class", "d-flex event-hover-details")
                eventHoverDetails.appendChild(eventDetailsDescription);
                console.log(eventDetailsDescription);
            }
        } else if (dateArray.length > 0) {
            dateArray.forEach((day:string) => {
            const targetDay = document.querySelector(`[data-daynumber="${day}"]`);
            if (targetDay) {
                const dayEvent = document.createElement("div");
                dayEvent.setAttribute("class",`row d-flex justify-content-center ${eventColor} bg-gradient mb-1 day-event-dropdown`);
                dayEvent.setAttribute("style","font-size: 12px; color: black;");
                dayEvent.innerText = `${element.name}`;

                // Data attributes (Puedes usar esto para hacer el modal o el hover, extra)
                dayEvent.setAttribute("data-startHour",`${element.eventHour}:${element.eventMinutes}`);
                dayEvent.setAttribute("data-endHour",`${element.eventHourF}:${element.eventMinutesF}`);
                dayEvent.setAttribute("data-description", `${element.description}`);
                dayEvent.setAttribute("data-eventType", `${element.eventType}`);

                targetDay.appendChild(dayEvent);
                const eventHoverDetails = document.createElement("div") as HTMLDivElement;
                eventHoverDetails.setAttribute("class", "d-flex flex-column justify-content-start align-items-between");
                dayEvent.appendChild(eventHoverDetails);
                const eventDetailsEventStart = document.createElement("p") as HTMLParagraphElement;
                eventDetailsEventStart.textContent= `Starts on the: ${element.eventDay}th, ${element.eventHour}:${element.eventMinutes}`;
                eventDetailsEventStart.setAttribute("class", "d-flex event-hover-hour-start")
                eventHoverDetails.appendChild(eventDetailsEventStart);                
                const eventDetailsEventFinish = document.createElement("p") as HTMLParagraphElement;
                eventDetailsEventFinish.textContent= `${element.eventHourF}:${element.eventMinutesF}`;
                eventDetailsEventFinish.setAttribute("class", "d-flex event-hover-hour-finish")
                eventHoverDetails.appendChild(eventDetailsEventFinish);
                console.log(eventDetailsEventFinish);
                const eventDetailsDescription = document.createElement("p") as HTMLParagraphElement;
                eventDetailsDescription.textContent= `${element.description}`;
                eventDetailsDescription.setAttribute("class", "d-flex event-hover-details")
                eventHoverDetails.appendChild(eventDetailsDescription);
                console.log(eventDetailsDescription);
            }
            })
        }
    });
    const prevMonth = document.querySelector('#prevMonth');
    prevMonth?.addEventListener("click", recreateEvents);
    const nextMonth = document.querySelector('#nextMonth');
    nextMonth?.addEventListener("click", recreateEvents);
}
