import { nanoid } from '@reduxjs/toolkit';
import { converDateToString, formatedDate } from '../../utils/date';

export const createReminder = (reminderData) => ({
  id: nanoid(10),
  date: converDateToString(),
  title: '',
  color: '#5CE095',
  ...reminderData,
});

export const groupRemindersByDay = (reminders) => {
  return reminders.reduce((acc, cur) => {
    const currentDay = formatedDate(cur.date);
    const dayAlreadyExists = acc.filter(({ day }) =>
      day ? formatedDate(day) === currentDay : false,
    );
    const hasSameDay = dayAlreadyExists.length;
    if (!hasSameDay) {
      const remindersInSameDay = reminders.filter(
        (reminder) => formatedDate(reminder.date) === currentDay,
      );
      acc.push({ day: formatedDate(cur.date), reminders: remindersInSameDay });
    }
    return acc;
  }, []);
};
