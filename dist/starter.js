import { setClimate } from './funcionalities/setWeather.js';
let currentDate = new Date();
let monthNumber = currentDate.getMonth();
console.log(monthNumber);
window.onload = () => {
    setClimate();
    setInterval(setClimate, 300000);
};
//# sourceMappingURL=starter.js.map