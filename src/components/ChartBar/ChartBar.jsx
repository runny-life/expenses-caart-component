import styles from './ChartBar.module.scss';

function ChartBar({ day, amount, heightPercent, isToday }) {
  return (
    <div className={styles.chartBar}>
      <div className={styles.tooltip}>{amount}</div>
      <div
        className={`${styles.bar} ${isToday ? styles.barToday : ''}`}
        style={{ height: `${heightPercent}%` }}
      ></div>
      <span className={styles.day}>{day}</span>
    </div>
  );
}

export default ChartBar;
