"use strict";
let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let actualMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
const daysContainer = document.querySelector("#daysContainer");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const prevMonthDom = document.querySelector("#prevMonth");
const nextMonthDom = document.querySelector("#nextMonth");
writeMonth(monthNumber);
setNewDate();
function writeMonth(month) {
    if (daysContainer) {
        const previousMonthdaysContainer = getTotaldaysContainer(monthNumber - 1);
        const currentMonthdaysContainer = getTotaldaysContainer(month);
        const startDayIndex = startDay();
        for (let i = previousMonthdaysContainer - startDayIndex + 1; i <= previousMonthdaysContainer; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day", "previous-month");
            dayElement.textContent = i.toString();
            daysContainer.appendChild(dayElement);
        }
        for (let i = 1; i <= currentMonthdaysContainer; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.setAttribute("id", "day");
            dayElement.setAttribute("data-dayNumber", `day${i}`);
            dayElement.textContent = i.toString();
            if (i === currentDay && month === actualMonth) {
                dayElement.classList.add("today");
            }
            daysContainer.appendChild(dayElement);
        }
    }
}
function getTotaldaysContainer(month) {
    if (month === -1)
        month = 11;
    if (month == 0 ||
        month == 2 ||
        month == 4 ||
        month == 6 ||
        month == 7 ||
        month == 9 ||
        month == 11) {
        return 31;
    }
    else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;
    }
    else {
        return isLeap() ? 29 : 28;
    }
}
function isLeap() {
    return ((currentYear % 100 !== 0 && currentYear % 4 === 0) ||
        currentYear % 400 === 0);
}
function startDay() {
    const start = new Date(currentYear, monthNumber, 1);
    return start.getDay() === 0 ? 6 : start.getDay() - 1;
}
function lastMonth() {
    if (monthNumber !== 0) {
        monthNumber--;
    }
    else {
        monthNumber = 11;
        currentYear--;
    }
    setNewDate();
}
function nextMonth() {
    if (monthNumber !== 11) {
        monthNumber++;
    }
    else {
        monthNumber = 0;
        currentYear++;
    }
    setNewDate();
}
function setNewDate() {
    currentDate = new Date(currentYear, monthNumber, currentDay);
    if (month) {
        month.textContent = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
    }
    if (year) {
        year.textContent = currentYear.toString();
    }
    if (daysContainer) {
        daysContainer.textContent = "";
    }
    writeMonth(monthNumber);
}
const calendar = document.querySelector("#generalContainer");
prevMonthDom === null || prevMonthDom === void 0 ? void 0 : prevMonthDom.addEventListener("click", function () {
    if (monthNumber !== 0) {
        monthNumber--;
    }
    else {
        monthNumber = 11;
        currentYear--;
    }
    setNewDate();
    animateTransition('fade-out-in');
});
nextMonthDom === null || nextMonthDom === void 0 ? void 0 : nextMonthDom.addEventListener("click", function () {
    if (monthNumber !== 11) {
        monthNumber++;
    }
    else {
        monthNumber = 0;
        currentYear++;
    }
    setNewDate();
    animateTransition('fade-out-in');
});
function animateTransition(animationClass) {
    calendar === null || calendar === void 0 ? void 0 : calendar.classList.add(animationClass);
    setTimeout(() => {
        calendar === null || calendar === void 0 ? void 0 : calendar.classList.add('active');
        calendar === null || calendar === void 0 ? void 0 : calendar.classList.remove(animationClass);
    }, 1000);
}
calendar === null || calendar === void 0 ? void 0 : calendar.addEventListener('animationend', function () {
    calendar === null || calendar === void 0 ? void 0 : calendar.classList.remove('active');
});
//# sourceMappingURL=MonthSelector.js.map