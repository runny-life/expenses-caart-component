import styles from './ChartBar.module.scss';
import { formatCurrency } from '@/utils/formatCurrency.js';

function ChartBar({ day, dayName, amount, heightPercent, isToday }) {
  const formattedAmount = formatCurrency(amount);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') event.currentTarget.blur();
  };

  return (
    <li className={styles.chartBar} tabIndex={0} onKeyDown={handleKeyDown}>
      <div
        className={`${styles.bar} ${isToday ? styles.barToday : ''}`}
        style={{ height: `${heightPercent}%` }}
        aria-hidden="true"
      >
        <span className={styles.tooltip}>{formattedAmount}</span>
      </div>
      <span className={styles.day} aria-hidden="true">
        {day}
      </span>
      <span className={styles.srOnly}>
        {dayName}: {formattedAmount}
        {isToday ? ' (today)' : ''}
      </span>
    </li>
  );
}

export default ChartBar;
