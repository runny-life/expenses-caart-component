import styles from './Summary.module.scss';

function Summary({ total }) {
  return (
    <div className={styles.summary}>
      <div className={styles.stats}>
        <p className={styles.label}>Total this month</p>
        <p className={styles.total}>${total.toFixed(2)}</p>
      </div>
      <div className={styles.change}>
        <p className={styles.percent}>+2.4%</p>
        <p className={styles.from}>from last month</p>
      </div>
    </div>
  );
}

export default Summary;
