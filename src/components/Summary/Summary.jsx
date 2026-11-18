import styles from './Summary.module.scss';
import { formatCurrency } from '@/utils/formatCurrency.js';

function Summary({ total }) {
  return (
    <div className={styles.summary}>
      <p className={styles.label}>Total this month</p>
      <div className={styles.stats}>
        <p className={styles.total}>{formatCurrency(total)}</p>
        <div className={styles.change}>
          <p className={styles.percent}>+2.4%</p>
          <p className={styles.from}>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
