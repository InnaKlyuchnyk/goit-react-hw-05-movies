import styles from './SerchMovies.module.css';
import { useState } from 'react';
import { fetchMoviesByKeyWord } from '../../services/fetches';
import { Link, useSearchParams } from 'react-router-dom';

const SerchMovies = () => {
  const [serchQuery, setSerchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serchParams, setSerchParams] = useSearchParams();

  const handleChange = event => {
    const { value } = event.currentTarget;
    setSerchQuery(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (serchQuery.trim() === '') {
      return console.log('sorry');
    }

    fetchMoviesByKeyWord(serchQuery)
      .then(data => {
        setMovies(data.results);
      })
      .finally(() => setLoading(false));

    setSerchParams({ query: serchQuery });

    if (!serchParams) return;
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input onChange={handleChange}></input>
        <button type="submit" className={styles.serchButton}>
          Serch
        </button>
      </form>
      {loading && <h2>Loading</h2>}
      {movies.length !== 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SerchMovies;

// toast('Type something please', {
//   style: {
//     background: '#f6f7c1',
//     color: 'black',
//   },
// });
