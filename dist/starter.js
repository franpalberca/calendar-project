import { setClimate } from './funcionalities/setWeather.js';
import { initializeCalendar } from './funcionalities/MonthSelector.js';
import { setCheckers } from './funcionalities/setCheckers.js';
import { setEventBtn } from './funcionalities/setEventBtn.js';
import { restartEventForm } from './funcionalities/restartEventForm.js';
import { recreateEvents } from './funcionalities/recreateEvents.js';
import { changeThemeAddEvent } from './changesTheme/changeTheme.js';
import { logInBtnClick } from './sign-In/signIn.js';
window.onload = () => {
    setClimate();
    setInterval(setClimate, 300000);
    initializeCalendar();
    setCheckers();
    setEventBtn();
    restartEventForm();
    recreateEvents();
    changeThemeAddEvent();
    logInBtnClick();
};
//# sourceMappingURL=starter.js.map