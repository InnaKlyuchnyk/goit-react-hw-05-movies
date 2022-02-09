import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import OneMovieCard from '../OneMovieCard';
import { fetchTrendCollection } from '../../services/fetches';

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

const HomeView = () => {
  const { trendMovies, loading } = useFetchTrandMovies();

  return (
    <>
      {loading && <h2>Loading</h2>}
      <ul>
        {trendMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomeView;
