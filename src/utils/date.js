export const converDateToString = (date = new Date()) => {
  return new Date(date).toISOString().split('.')[0];
};
export const daysOfWeekName = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const monthsOfTheYear = ''
  .padStart(12)
  .split('')
  .map((_, month) => month + 1);

export const hoursOfTheDay = ''
  .padStart(24)
  .split('')
  .map((_, day) => day + 1);

export const minutesOfTheHour = ''
  .padStart(60)
  .split('')
  .map((_, minute) => minute + 1);

export const convertStringToDate = (year, month, day) => {
  return new Date(`${year}-${month}-${day}`);
};

export const formatedDateTime = (date) => {
  const period = formatedDate(date);
  const time = formatedTime(date);
  return `${period} ${time}`;
};

export const formatedDate = (date) => {
  const [period] = date.split('T');
  return `${period.replace(/-/g, '/')}`;
};
export const formatedTime = (date) => {
  const [, time] = date.split('T');
  const [hour, minute] = time.split(':');
  return `${hour}:${minute}`;
};

export const sortRemindersByDates = (reminders) => {
  return reminders.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
};

export const getFirstDayByMonthAndYear = (year, month) => {
  return new Date(`${year}-${month}-01 00:00`).getUTCDay();
};

export const getLastDayByMonthAndYear = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export const createMonthPlusInitialWeeks = (
  firstMonthDay = 0,
  lastMonthDay = 20,
) => {
  return ''
    .padStart(firstMonthDay + lastMonthDay)
    .split('')
    .map((_, day) => day + 1);
};
