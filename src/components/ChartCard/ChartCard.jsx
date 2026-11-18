import { useId } from 'react';
import styles from './ChartCard.module.scss';
import Chart from '@/components/Chart/Chart.jsx';
import Summary from '@/components/Summary/Summary.jsx';

function ChartCard({ data, monthTotal }) {
  const titleId = useId();

  return (
    <section className={styles.card} aria-labelledby={titleId}>
      <h1 id={titleId} className={styles.title}>
        Spending - Last 7 days
      </h1>
      <Chart data={data} labelId={titleId} />
      <hr className={styles.divider} />
      <Summary total={monthTotal} />
    </section>
  );
}

export default ChartCard;
