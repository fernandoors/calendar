import { useDispatch, useSelector } from 'react-redux';

import { calendarActions } from '../../store/calendar/calendar.store';
import { monthNames } from '../../utils/date';

import ReminderEditor from '../../components/reminder-editor/reminder-editor';
import RemindersList from '../../components/reminder-list/reminders-list';
import MonthBoard from '../../components/month-board/month-board';

import styles from './home.page.module.css';

export default function HomePage() {
  const dispatch = useDispatch();
  const { year, month } = useSelector((store) => store.calendar);
  const { reminderSelected } = useSelector((store) => store.reminder);

  function handleIncreaseMonth() {
    dispatch(calendarActions.increaseMonth());
  }

  function handleDecreaseMonth() {
    dispatch(calendarActions.decreaseMonth());
  }

  const monthName = monthNames[month - 1];

  return (
    <main className={styles.container}>
      <section className={styles.calendar}>
        <div className={styles.header}>
          <p onClick={handleDecreaseMonth}>{'<'}</p>
          <div>
            <h3>{monthName}</h3>
            <h3>{year}</h3>
          </div>
          <p onClick={handleIncreaseMonth}>{'>'}</p>
        </div>
        <div>
          <MonthBoard className={styles.monthBoard} />
        </div>
      </section>
      <aside className={styles.menu}>
        {reminderSelected ? <ReminderEditor /> : <RemindersList />}
      </aside>
    </main>
  );
}
