import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import OneMovieCard from '../OneMovieCard';
import { fetchTrendCollection } from '../../services/fetches';

const HomeView = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendCollection().then(data => {
      setTrendMovies(data.results);
    });
  }, []);

  return (
    <ul>
      {trendMovies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={movie.id}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeView;
