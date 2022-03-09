import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

const calendar = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    increaseMonth(state) {
      if (state.month === 12) {
        state.year = state.year + 1;
      }
      state.month = state.month === 12 ? 1 : state.month + 1;
    },
    decreaseMonth(state) {
      if (state.month === 1) {
        state.year = state.year - 1;
      }
      state.month = state.month === 1 ? 12 : state.month - 1;
    },
  },
});

export const calendarActions = calendar.actions;
export default calendar.reducer;
