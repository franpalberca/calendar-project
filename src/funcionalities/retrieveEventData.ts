import { EventData } from '../types/eventData';

export function retrieveEventData(): EventData {
    const eventTitle = document.querySelector('#modalTitle') as HTMLInputElement;
    const eventName = eventTitle.value;

    const startDate = document.querySelector('#startDate') as HTMLInputElement;
    const dateString = startDate.value;

    const parts = dateString.split(/[-T:]/);

    const eventYear = parseInt(parts[0]);
    const eventMonth = parseInt(parts[1]);
    const eventDay = parseInt(parts[2]);
    const eventHour = parseInt(parts[3]);
    const eventMinutes = parseInt(parts[4]);

    const finishDate = document.querySelector('#finishDate') as HTMLInputElement;
    const dateFinishString = finishDate?.value;

    const fparts = dateFinishString.split(/[-T:]/);

    const eventYearF = parseInt(fparts[0]);
    const eventMonthF = parseInt(fparts[1]);
    const eventDayF = parseInt(fparts[2]);
    const eventHourF = parseInt(fparts[3]);
    const eventMinutesF = parseInt(fparts[4]);

    const remindMeOpt = document.querySelector('#remindMeOpt') as HTMLInputElement;
    const reminder = remindMeOpt.value;

    const eventDescription = document.querySelector('#description') as HTMLTextAreaElement;
    const description = eventDescription.value;

    const eventTypeOpt = document.querySelector('#eventTypeOpt') as HTMLInputElement;
    const eventType = eventTypeOpt.value;

    const eventObject: EventData = {
        name: eventName,
        eventYear: eventYear,
        eventMonth: eventMonth,
        eventDay: eventDay,
        eventHour: eventHour,
        eventMinutes: eventMinutes,
        eventYearF: eventYearF,
        eventMonthF: eventMonthF,
        eventDayF: eventDayF,
        eventHourF: eventHourF,
        eventMinutesF: eventMinutesF,
        reminder: reminder,
        description: description,
        eventType: eventType,
    };    

    const eventObjectJSON = JSON.stringify(eventObject);
    localStorage.setItem(`Event: ${eventName}`, eventObjectJSON);

    return eventObject;
}
