import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { reminderActions } from '../../store/reminder/reminder.store';
import { formatedTime } from '../../utils/date';
import styles from './reminder-item.module.css';

function RemindersItem({ reminder, isSelected }) {
  const dispatch = useDispatch();

  function handleEdit(remind) {
    dispatch(reminderActions.selectReminder(remind));
  }

  return (
    <div className={styles.container}>
      <p
        key={reminder.id}
        className={styles.content}
        onClick={() => handleEdit(reminder)}
        style={{
          borderLeftColor: reminder.color,
          borderBottomColor: reminder.color,
          backgroundColor: isSelected ? '#2b5b8b' : 'transparent',
        }}
      >
        {formatedTime(reminder.date)} - {reminder.title}
      </p>
    </div>
  );
}

export default memo(RemindersItem);
