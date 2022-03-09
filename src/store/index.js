import { combineReducers, createStore } from '@reduxjs/toolkit'
import reminderReducer from './reminder/reminder.store'
import calendarReducer from './calendar/calendar.store'

export const reducer = combineReducers({
  reminder: reminderReducer,
  calendar: calendarReducer,
})

export const store = createStore(reducer)
