export function transformTime(time) {
    const [hours, minutes] = time.split(':');
    const formattedMinutes = minutes.padStart(2, '0');
    return `${hours}:${formattedMinutes}`;
}
//# sourceMappingURL=transformTime.js.map