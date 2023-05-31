export function transformTime(time: string): string {
    const [hours, minutes] = time.split(':');
    const formattedMinutes = minutes.padStart(2, '0');
    return `${hours}:${formattedMinutes}`
}
