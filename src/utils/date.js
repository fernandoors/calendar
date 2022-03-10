export const converDateToLocalString = (date = new Date()) => {

  const period = new Date(date).toISOString().split("T")[0];
  const hour = new Date().getHours().toString().padStart("0", 2);
  const minutes = new Date().getMinutes().toString().padStart("0", 2);

  return `${period}T${hour}:${minutes}`;
};
export const daysOfWeekName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const convertStringToDate = (year, month, day) => {
  return new Date(`${year}-${month}-${day}`);
};

export const formatedDateTime = (date) => {
  const period = formatedDate(date);
  const time = formatedTime(date);
  return `${period} ${time}`;
};

export const formatedDate = (date) => {
  const [period] = date.split("T");
  return `${period.replace(/-/g, "/")}`;
};
export const formatedTime = (date) => {
  const [, time] = date.split("T");
  const [hour, minute] = time.split(":");
  return `${hour}:${minute}`;
};

export const sortRemindersByDates = (reminders) => {
  return reminders.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
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
  lastMonthDay = 30
) => {
  return ""
    .padStart(firstMonthDay + lastMonthDay)
    .split("")
    .map((_, day) => day + 1);
};
