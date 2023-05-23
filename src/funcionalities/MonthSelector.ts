let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let actualMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const daysContainer: HTMLElement | null = document.querySelector("#daysContainer");
const month: HTMLElement | null = document.querySelector("#month");
const year: HTMLElement | null = document.querySelector("#year");
const prevMonthDom: HTMLElement | null = document.querySelector("#prevMonth");
const nextMonthDom: HTMLElement | null = document.querySelector("#nextMonth");

writeMonth(monthNumber);
setNewDate();


function writeMonth(month: number) {
    if (daysContainer) {
        // while (daysContainer.firstChild) {
        //     daysContainer.firstChild.remove(); // Eliminar los días existentes
        // }

        const previousMonthdaysContainer = getTotaldaysContainer(monthNumber - 1);
        const currentMonthdaysContainer = getTotaldaysContainer(month);
        const startDayIndex = startDay();

        // Imprimir los días anteriores al primer día del mes actual
        for (let i = previousMonthdaysContainer - startDayIndex + 1; i <= previousMonthdaysContainer; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day", "previous-month");
            dayElement.textContent = i.toString();
            daysContainer.appendChild(dayElement);
        }

        // Imprimir los días del mes actual
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

function getTotaldaysContainer(month: number): number {
	if (month === -1) month = 11;

	if (
		month == 0 ||
		month == 2 ||
		month == 4 ||
		month == 6 ||
		month == 7 ||
		month == 9 ||
		month == 11
	) {
		return 31;
	} else if (month == 3 || month == 5 || month == 8 || month == 10) {
		return 30;
	} else {
		return isLeap() ? 29 : 28;
	}
}

function isLeap(): boolean {
    return (
        (currentYear % 100 !== 0 && currentYear % 4 === 0) ||
        currentYear % 400 === 0
    );
}

function startDay(): number {
    const start = new Date(currentYear, monthNumber, 1);
    return start.getDay() === 0 ? 6 : start.getDay() - 1;
}


function lastMonth(): void {
	if (monthNumber !== 0) {
		monthNumber--;
	} else {
		monthNumber = 11;
		currentYear--;
	}
	setNewDate();
}

function nextMonth(): void {
	if (monthNumber !== 11) {
		monthNumber++;
	} else {
		monthNumber = 0;
		currentYear++;
	}
	setNewDate();
}


function setNewDate(): void {
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

// prevMonthDom?.addEventListener("click", () => lastMonth());
// nextMonthDom?.addEventListener("click", () => nextMonth());

const calendar = document.querySelector("#generalContainer");

prevMonthDom?.addEventListener("click", function() {
  if (monthNumber !== 0) {
    monthNumber--;
  } else {
    monthNumber = 11;
    currentYear--;
  }
  setNewDate();
  animateTransition('fade-out-in');
});

nextMonthDom?.addEventListener("click", function() {
  if (monthNumber !== 11) {
    monthNumber++;
  } else {
    monthNumber = 0;
    currentYear++;
  }
  setNewDate();
  animateTransition('fade-out-in');
});

function animateTransition(animationClass: string): void {
    calendar?.classList.add(animationClass);
    setTimeout(() => {
      calendar?.classList.add('active');
      calendar?.classList.remove(animationClass);
    }, 1000); // Ajusta el tiempo de espera según tus necesidades
  }
  
  

// Evento para limpiar la clase de animación después de que termine la animación
calendar?.addEventListener('animationend', function() {
  calendar?.classList.remove('active');
});