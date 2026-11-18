import { useId } from 'react';
import styles from './BalanceCard.module.scss';
import logo from '../../assets/icon/logo.svg';
import { formatCurrency } from '@/utils/formatCurrency.js';

function BalanceCard({ balance }) {
  const labelId = useId();

  return (
    <section className={styles.card} aria-labelledby={labelId}>
      <div className={styles.body}>
        <p id={labelId}>My balance</p>
        <p className={styles.amount}>{formatCurrency(balance)}</p>
      </div>
      <img className={styles.logo} src={logo} alt="" width="72" height="48" />
    </section>
  );
}

export default BalanceCard;
