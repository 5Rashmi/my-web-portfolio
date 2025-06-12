export const getCalendar = (year: number, month: number) => {
    const today = new Date();

    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    const startDay = startDate.getDay();
    const totalDays = endDate.getDate();

    const calendarDays = [];
for (let i = 1; i < startDay; i++) {
        calendarDays.push(null);
    }
    for (let i = 1; i <=totalDays; i++) {
        calendarDays.push(new Date(year, month, i));
    }

    return {calendarDays, today, year, month, startDay, totalDays};
}