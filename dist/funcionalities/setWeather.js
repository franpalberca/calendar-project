export function setClimate() {
    getLocation()
        .then((data) => {
        const fLocation = document.querySelector("#fLocation");
        fLocation.innerText = `${data.city}, ${data.region}, ${data.country}`;
        const fTemperature = document.querySelector("#fTemperature");
        fTemperature.innerText = `${data.temperature} °C`;
        const fTermicSensation = document.querySelector("#fTermicSensation");
        fTermicSensation.innerText = `${data.termicSensation} °C`;
        const fPreasure = document.querySelector("#fPreasure");
        fPreasure.innerText = `${data.pressure} mb`;
        const fHumidity = document.querySelector("#fHumidity");
        fHumidity.innerText = `${data.humidity} %`;
        const fPChance = document.querySelector("#fPChance");
        fPChance.innerText = `${data.precipitationChance} %`;
    })
        .catch((error) => {
        console.error(error);
    });
}
function getLocation() {
    return new Promise(async (resolve, reject) => {
        if (navigator.geolocation) {
            try {
                const position = await getCurrentPosition();
                const { latitude, longitude } = position.coords;
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=40abbbc8dd7244e3855100552232205&q=${latitude},${longitude}&aqi=yes`);
                const data = await response.json();
                const weather = data.current;
                const temperature = weather.temp_c;
                const termicSensation = weather.feelslike_c;
                const pressure = weather.pressure_mb;
                const humidity = weather.humidity;
                const precipitationChance = weather.precip_mm;
                const location = data.location;
                const city = location.name;
                const region = location.region;
                const country = location.country;
                resolve({
                    temperature,
                    termicSensation,
                    pressure,
                    humidity,
                    precipitationChance,
                    city,
                    region,
                    country,
                });
            }
            catch (error) {
                reject(error);
            }
        }
        else {
            reject(new Error("Geolocation is not supported"));
        }
    });
}
function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
//# sourceMappingURL=setWeather.js.map