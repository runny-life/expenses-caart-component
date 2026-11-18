import styles from './Chart.module.scss';
import ChartBar from '@/components/ChartBar/ChartBar.jsx';

function Chart({ data }) {
  const maxAmount = Math.max(...data.map((item) => item.amount));

  const toDayIndex = (new Date().getDay() + 6) % 7;
  return (
    <div className={styles.chart}>
      {data.map((item, index) => (
        <ChartBar
          key={item.day}
          day={item.day}
          amount={item.amount}
          heightPercent={(item.amount / maxAmount) * 100}
          isToday={index === toDayIndex}
        />
      ))}
    </div>
  );
}

export default Chart;
