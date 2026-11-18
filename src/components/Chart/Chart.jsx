import styles from './Chart.module.scss';
import ChartBar from '@/components/ChartBar/ChartBar.jsx';

const DAY_NAMES = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
};

const DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function Chart({ data, labelId }) {
  const maxAmount = Math.max(...data.map((item) => item.amount));
  const todayKey = DAY_KEYS[new Date().getDay()];

  return (
    <ul className={styles.chart} role="list" aria-labelledby={labelId}>
      {data.map((item) => (
        <ChartBar
          key={item.day}
          day={item.day}
          dayName={DAY_NAMES[item.day] ?? item.day}
          amount={item.amount}
          heightPercent={(item.amount / maxAmount) * 100}
          isToday={item.day === todayKey}
        />
      ))}
    </ul>
  );
}

export default Chart;
