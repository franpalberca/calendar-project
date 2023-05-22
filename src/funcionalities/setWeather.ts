import { WeatherData } from '../types/WeatherData.js'
export function setClimate() {
    getLocation()
    .then((data: WeatherData) => {
        const fLocation = document.querySelector('#fLocation') as HTMLElement;
        fLocation.innerText = `${data.city}, ${data.region}, ${data.country}`;

        const fTemperature = document.querySelector('#fTemperature') as HTMLElement;
        fTemperature.innerText = `${data.temperature} °C`;

        const fTermicSensation = document.querySelector('#fTermicSensation') as HTMLElement;
        fTermicSensation.innerText = `${data.termicSensation} °C`;

        const fPreasure = document.querySelector('#fPreasure') as HTMLElement;
        fPreasure.innerText = `${data.pressure} hPa`;

        const fHumidity = document.querySelector('#fHumidity') as HTMLElement;
        fHumidity.innerText = `${data.humidity} %`;

        const fPChance = document.querySelector('#fPChance') as HTMLElement;
        fPChance.innerText = `${data.precipitationChance} %`;
    })
    .catch((error: Error) => {
        console.error(error);
    });
};

function getLocation(): Promise<WeatherData> {
    return new Promise<WeatherData>(async (resolve, reject) => {
    if (navigator.geolocation) {
        try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;

        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=40abbbc8dd7244e3855100552232205&q=${latitude},${longitude}&aqi=yes`);
        const data = await response.json();

        const weather = data.current;
        const temperature = weather.temp_c;
        const termicSensation = weather.feelslike_c;
        const pressure = weather.pressure_in;
        const humidity = weather.humidity;
        const precipitationChance = weather.precip_in;

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
            country
        });
        } catch (error) {
        reject(error);
        }
    } else {
        reject(new Error("Geolocation is not supported"));
    }
    });
}

function getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
