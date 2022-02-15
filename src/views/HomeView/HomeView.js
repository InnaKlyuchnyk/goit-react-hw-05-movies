import { Link } from 'react-router-dom';
import useFetchTrandMovies from './useFetchTrandMovies';

const HomeView = () => {
  const { trendMovies, loading } = useFetchTrandMovies();

  return (
    <>
      {loading && <h2>Loading</h2>}
      <ul>
        {trendMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomeView;
