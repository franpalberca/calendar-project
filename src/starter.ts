import { setClimate } from './funcionalities/setWeather.js';
import { initializeCalendar } from './funcionalities/MonthSelector.js'
window.onload = () => {
    setClimate();
    setInterval(setClimate, 300000);
    initializeCalendar();
};
