import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { reminderActions } from '../../store/reminder/reminder.store';
import { converDateToLocalString, formatedDate } from '../../utils/date';

import RemindersItem from '../reminder-item/reminder-item';

import styles from './day-card.module.css';

export default function DayCard({ day, date }) {
  const dispatch = useDispatch();
  const { filterByDay, reminders, reminderSelected } = useSelector(
    (store) => store.reminder,
  );

  function handleSelectFilterDay(dateSelected) {
    dispatch(reminderActions.selectFilterDay(dateSelected));
  }

  function handleAddReminderWithDate() {
    const time = new Date().toTimeString().split(' ')[0];
    const dateAdded = `${date} ${time}`;
    dispatch(reminderActions.add({ date: converDateToLocalString(dateAdded) }));
  }

  const remindersFiltersByDay = useMemo(
    () =>
      reminders.filter(
        (remind) => formatedDate(remind.date) === formatedDate(date),
      ),
    [reminders, date],
  );

  return (
    <div
      onClick={() => handleSelectFilterDay(date)}
      data-testid="day-card"
      className={styles.container}
      style={{
        background: filterByDay === date ? '#6495ed' : '#f5f5dc42',
      }}
    >
      <h4 className={styles.day}>
        {day}
        <span
          onClick={handleAddReminderWithDate}
          className={styles.add + ' fa fa-plus'}
        />
      </h4>
      <div className={styles.list}>
        {remindersFiltersByDay.map((reminder) => (
          <RemindersItem
            reminder={reminder}
            isSelected={
              !!reminderSelected && reminder.id === reminderSelected.id
            }
            key={reminder.id}
          />
        ))}
      </div>
    </div>
  );
}
