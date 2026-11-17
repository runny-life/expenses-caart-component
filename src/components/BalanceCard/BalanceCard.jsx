import styles from './BalanceCard.module.scss';
import logo from '../../assets/icon/logo.svg';

function BalanceCard({ balance }) {
  return (
    <header className={styles.card}>
      <div className={styles.body}>
        <p>My balance</p>
        <p className={styles.amount}>${balance}</p>
      </div>
      <img className={styles.logo} src={logo} alt="Logo" width="72" height="48" />
    </header>
  );
}

export default BalanceCard;
