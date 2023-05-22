import { setClimate } from './funcionalities/setWeather.js';
window.onload = () => {
    setClimate();
    setInterval(setClimate, 300000);
};
//# sourceMappingURL=starter.js.map