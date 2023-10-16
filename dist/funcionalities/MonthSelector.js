import { recreateEvents } from "./recreateEvents.js";
export function initializeCalendar() {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let monthNumber = currentDate.getMonth();
    let actualMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let actualYear = currentDate.getFullYear();
    const btnToday = document.querySelector("#btnToday");
    const mainContainer = document.querySelector("#mainContainer");
    const calendar = document.createElement("div");
    calendar.classList.add("general-container");
    calendar.id = "generalContainer";
    mainContainer.appendChild(calendar);
    const monthDiv = document.createElement("div");
    monthDiv.classList.add("month");
    calendar.appendChild(monthDiv);
    const prevMonthDom = document.createElement("i");
    prevMonthDom.id = "prevMonth";
    prevMonthDom.setAttribute("class", "bi bi-chevron-left prev");
    monthDiv.appendChild(prevMonthDom);
    const month = document.createElement("span");
    month.id = "month";
    month.classList.add("date");
    month.textContent = "MONTH";
    monthDiv.appendChild(month);
    const year = document.createElement("span");
    year.id = "year";
    monthDiv.appendChild(year);
    const nextMonthDom = document.createElement("i");
    nextMonthDom.id = "nextMonth";
    nextMonthDom.setAttribute("class", "bi bi-chevron-right next");
    monthDiv.appendChild(nextMonthDom);
    function createWeekDays() {
        const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
        const weekDivContainer = document.createElement("div");
        weekDivContainer.classList.add("week");
        calendar.appendChild(weekDivContainer);
        for (let i = 0; i < 7; i++) {
            const weekday = weekDays[i];
            const divTextWeek = document.createElement("div");
            divTextWeek.classList.add("div-text-week");
            weekDivContainer.appendChild(divTextWeek);
            const weekDay = document.createElement("p");
            weekDay.classList.add("week-days");
            weekDay.textContent = weekday;
            divTextWeek.appendChild(weekDay);
        }
        const daysDivContainer = document.createElement("div");
        daysDivContainer.classList.add("days");
        daysDivContainer.setAttribute("id", "daysContainer");
        calendar.appendChild(daysDivContainer);
    }
    createWeekDays();
    const daysContainer = document.querySelector("#daysContainer");
    function writeMonth(month) {
        if (daysContainer) {
            while (daysContainer.firstChild) {
                daysContainer.firstChild.remove();
            }
            const previousMonthdaysContainer = getTotaldaysContainer(monthNumber - 1);
            const currentMonthdaysContainer = getTotaldaysContainer(month);
            const startDayIndex = startDay();
            for (let i = previousMonthdaysContainer - startDayIndex + 1; i <= previousMonthdaysContainer; i++) {
                const dayElement = document.createElement("div");
                dayElement.classList.add("day", "previous-month");
                dayElement.setAttribute("id", `day${i}`);
                dayElement.addEventListener("click", () => {
                    dayElement.style.overflow = "visible";
                    setTimeout(() => {
                        dayElement.style.overflow = "hidden";
                    }, 10000);
                });
                daysContainer.appendChild(dayElement);
                const numberDay = document.createElement("p");
                numberDay.setAttribute("class", "ms-2 mb-0");
                numberDay.textContent = i.toString();
                dayElement.appendChild(numberDay);
            }
            for (let i = 1; i <= currentMonthdaysContainer; i++) {
                const dayElement = document.createElement("div");
                dayElement.classList.add("day");
                dayElement.setAttribute("id", `day${i}`);
                dayElement.addEventListener("click", () => {
                    dayElement.style.overflow = "visible";
                    setTimeout(() => {
                        dayElement.style.overflow = "hidden";
                    }, 10000);
                });
                let paddedMonth = monthNumber + 1;
                let dateAttribute = `${currentYear}-${paddedMonth}-${i}`;
                const toISODate = new Date(dateAttribute).toISOString().slice(0, 10);
                const numberDay = document.createElement("p");
                numberDay.setAttribute("class", "d-flex px-2 mb-0 align-items-center justify-content-between");
                numberDay.textContent = i.toString();
                dayElement.appendChild(numberDay);
                const dayEventContainer = document.createElement("div");
                dayEventContainer.setAttribute("class", "container overflow-auto mh-75");
                dayEventContainer.setAttribute("data-dayNumber", toISODate);
                dayElement.appendChild(dayEventContainer);
                const addButtonDiv = document.createElement("div");
                addButtonDiv.classList.add("add-button-container");
                numberDay.appendChild(addButtonDiv);
                const addButton = document.createElement("button");
                addButton.classList.add("hover-button");
                addButton.setAttribute("data-today", toISODate);
                addButton.addEventListener("click", (event) => {
                    if (event.target) {
                        const targetDay = event.currentTarget;
                        const dayData = targetDay.getAttribute("data-today");
                        const startDate = document.querySelector("#startDate");
                        if (startDate) {
                            startDate.value = `${dayData}T12:00`;
                        }
                    }
                });
                addButtonDiv.appendChild(addButton);
                const addButtonSpan = document.createElement("span");
                addButtonSpan.classList.add("plus-icon");
                addButtonSpan.setAttribute("data-bs-toggle", "modal");
                addButtonSpan.setAttribute("data-bs-target", "#eventModal");
                addButtonSpan.textContent = "+";
                addButton.appendChild(addButtonSpan);
                const targetYear = year.innerText;
                const todayYear = actualYear.toString();
                if (i === currentDay && month === actualMonth && todayYear === targetYear) {
                    dayElement.classList.add("today");
                }
                daysContainer.appendChild(dayElement);
            }
            const remainingNextDays = 7 - ((startDayIndex + currentMonthdaysContainer) % 7);
            for (let i = 1; i <= remainingNextDays; i++) {
                const dayElement = document.createElement("div");
                dayElement.classList.add("day", "next-month");
                daysContainer.appendChild(dayElement);
                dayElement.setAttribute("id", `day${i}`);
                dayElement.addEventListener("click", () => {
                    dayElement.style.overflow = "visible";
                    setTimeout(() => {
                        dayElement.style.overflow = "hidden";
                    }, 10000);
                });
                const numberDay = document.createElement("p");
                numberDay.setAttribute("class", "ms-2 mb-0");
                numberDay.textContent = i.toString();
                dayElement.appendChild(numberDay);
            }
        }
    }
    writeMonth(monthNumber);
    function getTotaldaysContainer(month) {
        if (month === -1)
            month = 11;
        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
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
        return ((currentYear % 100 !== 0 && currentYear % 4 === 0) || currentYear % 400 === 0);
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
        calendar.classList.add("tearing-effect-lastMont");
        setTimeout(() => {
            calendar.classList.remove("tearing-effect-lastMont");
        }, 600);
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
        calendar.classList.add("tearing-effect-nextMonth");
        setTimeout(() => {
            calendar.classList.remove("tearing-effect-nextMonth");
        }, 600);
    }
    function setNewDate() {
        const actualMonthDate = new Date(currentYear, monthNumber, 1);
        if (month) {
            month.textContent = new Intl.DateTimeFormat(navigator.language, {
                month: "long",
            }).format(actualMonthDate);
        }
        if (year) {
            year.textContent = currentYear.toString();
        }
        writeMonth(monthNumber);
    }
    setNewDate();
    prevMonthDom.addEventListener("click", lastMonth);
    nextMonthDom.addEventListener("click", nextMonth);
    btnToday.addEventListener("click", () => {
        const today = new Date();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();
        if (monthNumber !== todayMonth || currentYear !== todayYear) {
            currentYear = todayYear;
            monthNumber = todayMonth;
            if (month && year) {
                month.textContent = new Intl.DateTimeFormat(navigator.language, { month: "long" }).format(today);
                year.textContent = currentYear.toString();
            }
            writeMonth(monthNumber);
            recreateEvents();
        }
    });
}
//# sourceMappingURL=MonthSelector.js.map