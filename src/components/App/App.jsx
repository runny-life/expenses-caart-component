import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import BalanceCard from '../BalanceCard/BalanceCard.jsx';
import ChartCard from '../ChartCard/ChartCard.jsx';

const BALANCE = 921.48;
const MONTH_TOTAL = 478.33;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Error loading data');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <main className={styles.content}>
      {loading && <p role="status">Loading…</p>}
      {error && <p role="alert">Error: {error}</p>}
      {!loading && !error && (
        <div className={styles.card}>
          <BalanceCard balance={BALANCE} />
          <ChartCard data={data} monthTotal={MONTH_TOTAL} />
        </div>
      )}
    </main>
  );
}

export default App;
