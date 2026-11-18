import styles from './ChartCard.module.scss';
import Chart from '@/components/Chart/Chart.jsx';
import Summary from '@/components/Summary/Summary.jsx';

function ChartCard({ data }) {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Spending - Last 7 days</h1>
      <Chart data={data} />
      <hr className={styles.divider} />
      <Summary total={total} />
    </div>
  );
}

export default ChartCard;
