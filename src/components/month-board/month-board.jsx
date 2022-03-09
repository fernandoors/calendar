import { useSelector } from 'react-redux';

import {
  convertStringToDate,
  createMonthPlusInitialWeeks,
  daysOfWeekName,
  formatedDate,
  getFirstDayByMonthAndYear,
  getLastDayByMonthAndYear,
} from '../../utils/date';

import DayCard from '../day-card/day-card';

import styles from './month-board.module.css';

function MonthBoard() {
  const { year, month } = useSelector((store) => store.calendar);
  const firstDayWeekOfTheMonth = getFirstDayByMonthAndYear(year, month);
  const lastDayOfTheMonth = getLastDayByMonthAndYear(year, month);
  const daysOfTheMonth = createMonthPlusInitialWeeks(
    firstDayWeekOfTheMonth,
    lastDayOfTheMonth,
  );

  return (
    <div data-testid="month-board" className={styles.container}>
      {daysOfWeekName.map((day) => (
        <p className={styles.dayWeek} key={day}>
          {day}
        </p>
      ))}

      {daysOfTheMonth.map((day) => {
        const currentDay = day - firstDayWeekOfTheMonth;
        if (currentDay < 1) {
          return <p key={day} />;
        }

        const date = convertStringToDate(year, month, currentDay).toISOString();

        return day <= firstDayWeekOfTheMonth ? (
          <p key={day}></p>
        ) : (
          <DayCard day={currentDay} date={formatedDate(date)} key={day} />
        );
      })}
    </div>
  );
}

export default MonthBoard;
