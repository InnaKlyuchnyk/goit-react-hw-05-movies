import { fetchTrendCollection } from '../../services/fetches';
import { useState, useEffect } from 'react';

const useFetchTrandMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchTrendCollection()
      .then(data => {
        setTrendMovies(data.results);
      })
      .finally(() => setLoading(false));
  }, []);
  return { trendMovies, loading };
};

export default useFetchTrandMovies;
