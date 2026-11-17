import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import BalanceCard from '../BalanceCard/BalanceCard.jsx';
import ChartCard from '../ChartCard/ChartCard.jsx';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Error loading data');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>...loading</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className={styles.content}>
      <article className={styles.card}>
        <BalanceCard balance={921.48} />
        <ChartCard data={data} />
      </article>
    </main>
  );
}

export default App;
