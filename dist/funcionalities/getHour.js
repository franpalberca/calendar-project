export function getHour(startHour, minus) {
    const timeParts = startHour.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setMinutes(date.getMinutes() - minus);
    const updatedHours = date.getHours();
    const updatedMinutes = date.getMinutes();
    const updatedTimeString = ("0" + updatedHours).slice(-2) + ":" + ("0" + updatedMinutes).slice(-2);
    return updatedTimeString;
}
//# sourceMappingURL=getHour.js.map