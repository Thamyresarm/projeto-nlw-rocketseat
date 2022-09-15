//1080 -> 18:00


export function convertMinutesToHoursString(minutesAmoung: number){
    const hours = Math.floor(minutesAmoung / 60);
    const minutes = minutesAmoung % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2,'0')}`;
}