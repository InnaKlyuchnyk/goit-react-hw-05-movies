import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieDetails } from '../../services/fetches';
import styles from './OneMovieCard.module.css';

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w500';

const useFetchOneMovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchMovie = async () => {
      return await movieDetails(movieId)
        .then(setMovie)
        .finally(() => setLoading(false));
    };
    fetchMovie();
  }, [movieId]);
  return { movie, loading };
};

export const OneMovieCard = () => {
  const { movie, loading } = useFetchOneMovieDetails();
  // console.log(movie);

  const getGenres = () => {
    const genres = [];
    movie.genres.map(genre => genres.push(genre.name));
    return genres;
  };

  return (
    <>
      <div className={styles.moviePage}>
        {loading && <h2>Loading</h2>}
        <button type="button" className={styles.button}>
          Go back
        </button>
        {movie && (
          <div className={styles.movieCard}>
            <img
              src={baseImgUrl + imgSize + movie.poster_path}
              alt={movie.title}
              width="280px"
              height="auto"
              className={styles.movieImg}
            />
            <div className={styles.movieDescription}>
              <h3>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h3>
              <h5>Overview</h5>
              <p>{movie.overview}</p>
              <h5>Genres</h5>
              <p>{getGenres()}</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.additInfo}>
        <h4>Additional information</h4>
        <Link to="cast" className={styles.link}>
          Cast
        </Link>
        <Link to="reviews" className={styles.link}>
          Reviews
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default OneMovieCard;
