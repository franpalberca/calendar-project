export function retrieveEventData() {
    const eventTitle = document.querySelector('#modalTitle');
    const eventName = eventTitle.value;
    const startDate = document.querySelector('#startDate');
    const dateString = startDate.value;
    const parts = dateString.split(/[-T:]/);
    const eventYear = parseInt(parts[0]);
    const eventMonth = parseInt(parts[1]);
    const eventDay = parseInt(parts[2]);
    const eventHour = parseInt(parts[3]);
    const eventMinutes = parseInt(parts[4]);
    const finishDate = document.querySelector('#finishDate');
    const dateFinishString = finishDate === null || finishDate === void 0 ? void 0 : finishDate.value;
    const fparts = dateFinishString.split(/[-T:]/);
    const eventYearF = parseInt(fparts[0]);
    const eventMonthF = parseInt(fparts[1]);
    const eventDayF = parseInt(fparts[2]);
    const eventHourF = parseInt(fparts[3]);
    const eventMinutesF = parseInt(fparts[4]);
    const remindMeOpt = document.querySelector('#remindMeOpt');
    const reminder = remindMeOpt.value;
    const eventDescription = document.querySelector('#description');
    const description = eventDescription.value;
    const eventTypeOpt = document.querySelector('#eventTypeOpt');
    const eventType = eventTypeOpt.value;
    const eventObject = {
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
//# sourceMappingURL=retrieveEventData.js.map