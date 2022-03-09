import { createSlice } from '@reduxjs/toolkit';
import { sortRemindersByDates } from '../../utils/date';

import { createReminder } from './reminder.utils';

const initialState = {
  reminderSelected: null,
  filterByDay: null,
  reminders: sortRemindersByDates([
    createReminder({
      title: 'Original Index 0: Reminder',
      date: '2022-03-10T15:00',
    }),
    createReminder({
      title: 'Original Index 1: Reminder',
      date: '2022-03-08T14:00',
    }),
    createReminder({
      title: 'Original Index 2: Reminder',
      date: '2022-03-08T09:00',
    }),
  ]),
};
const reminder = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    selectFilterDay(state, { payload }) {
      state.filterByDay = payload;
    },
    selectReminder(state, { payload }) {
      state.reminderSelected = payload;
    },
    updateReminder(state, { payload }) {
      state.reminderSelected[payload.key] = payload.value;
    },
    add(state, { payload }) {
      const newReminder = createReminder(payload);
      state.reminders.push(newReminder);
      state.reminderSelected = newReminder;
    },
    save(state) {
      const updatedReminders = state.reminders.map((currentReminder) =>
        currentReminder.id === state.reminderSelected.id
          ? state.reminderSelected
          : currentReminder,
      );
      state.reminders = sortRemindersByDates(updatedReminders);
      state.reminderSelected = null;
    },
    remove(state, { payload }) {
      state.reminders = state.reminders.filter(({ id }) => id !== payload);
      state.reminderSelected = null;
    },
  },
});

export const reminderActions = reminder.actions;
export default reminder.reducer;
