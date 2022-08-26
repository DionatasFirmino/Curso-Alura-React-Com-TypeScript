export function timeForSeconds(time: string) {
    const [hour = '0', minute = '0', second = '0'] = time.split(":");
    const hourInSeconds = Number(hour) * 3600;
    const minuteInSeconds = Number(minute) * 60;
    return hourInSeconds + minuteInSeconds + Number(second);
}