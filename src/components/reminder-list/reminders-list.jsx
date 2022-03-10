import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { reminderActions } from '../../store/reminder/reminder.store';
import { groupRemindersByDay } from '../../store/reminder/reminder.utils';

import { formatedDate } from '../../utils/date';

import RemindersItem from '../reminder-item/reminder-item';

import styles from './reminders-list.module.css';

function RemindersList() {
  const dispatch = useDispatch();
  const { reminders, filterByDay } = useSelector((store) => store.reminder);

  const remindersByDay = useMemo(
    () =>
      groupRemindersByDay(reminders).filter(
        ({ day }) => !filterByDay || formatedDate(day) === filterByDay,
      ),
    [reminders, filterByDay],
  );

  function handleCloseFilter() {
    dispatch(reminderActions.selectFilterDay(null));
  }

  function handleAddReminder() {
    dispatch(reminderActions.add());
  }

  return (
    <div className={styles.container}>
      <h4>
        Reminders:
        {!!filterByDay ? (
          <>
            <label>{filterByDay}</label>
            <span
              className="fa fa-times-circle"
              onClick={handleCloseFilter}
            ></span>
          </>
        ) : (
          <button className={styles.primary} onClick={handleAddReminder}>
            Add
          </button>
        )}
      </h4>
      {!remindersByDay.length ? (
        <h4>Reminders not found</h4>
      ) : (
        remindersByDay.map((reminderContent) => (
          <div key={reminderContent.day}>
            {!filterByDay ? <p> {reminderContent.day} </p> : null}
            {reminderContent.reminders.map((reminder) => (
              <RemindersItem reminder={reminder} key={reminder.id} />
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default RemindersList;
