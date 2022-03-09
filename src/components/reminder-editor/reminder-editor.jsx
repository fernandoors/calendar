import { useDispatch, useSelector } from 'react-redux';

import { reminderActions } from '../../store/reminder/reminder.store';

import styles from './reminder-editor.module.css';

export default function ReminderEditor() {
  const { reminderSelected } = useSelector((store) => store.reminder);
  const dispatch = useDispatch();

  function handleSaveReminder(e) {
    e.preventDefault();
    dispatch(reminderActions.save());
  }

  function handleCancelChanges() {
    dispatch(reminderActions.selectReminder(null));
  }

  function handleUpdateForm(e) {
    const { name, value } = e.target;
    if (value.length <= 30) {
      dispatch(reminderActions.updateReminder({ key: name, value }));
    }
  }

  function handleRemoveReminder() {
    dispatch(reminderActions.remove(reminderSelected.id));
  }

  return (
    <section className={styles.container} data-testid="reminder-editor">
      <h3>Set a Remind</h3>
      <form onSubmit={handleSaveReminder}>
        <div className={styles.date}>
          <label className={styles.label} htmlFor="date">
            When:
            <span
              onClick={handleRemoveReminder}
              className={styles.trash + ' fa fa-trash'}
            />
          </label>
          <input
            type="datetime-local"
            name="date"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
            value={reminderSelected.date}
            onChange={handleUpdateForm}
          />
        </div>
        <div className={styles.title}>
          <label className={styles.label} htmlFor="title">
            Reminder title:
            <span
              className={styles.span}
              style={{
                color: reminderSelected.title.length > 25 ? '#f00' : '#000',
              }}
            >
              ({reminderSelected.title.length}/30)
            </span>
          </label>
          <input
            type="text"
            name="title"
            onChange={handleUpdateForm}
            value={reminderSelected.title}
          />
        </div>
        <div className={styles.color}>
          <label className={styles.label} htmlFor="color">
            Color Group:
          </label>
          <input
            type="color"
            name="color"
            onChange={handleUpdateForm}
            value={reminderSelected.color}
          />
        </div>
        <footer className={styles.buttons}>
          <input
            className={styles.segundary}
            type="button"
            onClick={handleCancelChanges}
            value="Cancel"
          />
          <input
            disabled={!reminderSelected.title}
            className={styles.primary}
            type="submit"
            value="save"
          />
        </footer>
      </form>
    </section>
  );
}
