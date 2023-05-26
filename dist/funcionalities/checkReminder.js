import { getHour } from './getHour.js';
import { createPopUp } from "./createPopUp.js";
export function checkReminders() {
    const events = document.querySelectorAll('[data-reminder]');
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentTime = ("0" + currentHour).slice(-2) + ":" + ("0" + currentMinute).slice(-2);
    ;
    const todaysDate = new Date(`${currentYear}-${currentMonth}-${currentDay}`).toISOString().slice(0, 10);
    events.forEach(element => {
        const dataDay = element.getAttribute('data-day');
        const eventName = element.getAttribute('data-name');
        const eventReminder = element.getAttribute('data-reminder');
        const eventHour = element.getAttribute('data-starthour');
        let minus = 0;
        switch (eventReminder) {
            case '5min':
                minus = 5;
                break;
            case '10min':
                minus = 10;
                break;
            case '15min':
                minus = 15;
                break;
            case '30min':
                minus = 30;
                break;
            case '45min':
                minus = 45;
                break;
            case '60min':
                minus = 60;
                break;
        }
        const timeOfReminder = getHour(eventHour, minus);
        if (timeOfReminder == currentTime && todaysDate == dataDay) {
            createPopUp(eventName, minus);
        }
    });
}
//# sourceMappingURL=checkReminder.js.map