import { Link, Outlet, useLocation } from 'react-router-dom';
import { useRef } from 'react';

import useFetchOneMovieDetails from './useFetchOneMovieDetails';
import BackLink from '../../components/BackLink';
import styles from './OneMovieCard.module.css';

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w500';
const defaultImg =
  'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

export const OneMovieCard = () => {
  const { movie, loading, movieId } = useFetchOneMovieDetails();
  const { state } = useLocation();
  const path = useRef(state);

  return (
    <>
      <div className={styles.moviePage}>
        {loading && <h2>Loading</h2>}
        {!loading && <BackLink />}

        {movie && (
          <div className={styles.movieCard}>
            <img
              src={
                movie.poster_path
                  ? baseImgUrl + imgSize + movie.poster_path
                  : defaultImg
              }
              alt={movie.title}
              width="280px"
              height="auto"
              className={styles.movieImg}
            />
            <div className={styles.movieDescription}>
              <h3>
                {movie.title ? movie.title : movie.name} (
                {movie.release_date.slice(0, 4)})
              </h3>
              <h5>User score: {movie.vote_average * 10}%</h5>
              <h5>Overview</h5>
              <p>{movie.overview}</p>
              <h5>Genres</h5>
              {movie.genres.map(genre => (
                <p key={genre.id} className={styles.genre}>
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={styles.additInfo}>
        <h4>Additional information</h4>
        <Link
          to={`/movies/${movieId}/cast`}
          className={styles.link}
          state={{ from: path.current }}
        >
          Cast
        </Link>
        <Link
          to={`/movies/${movieId}/reviews`}
          className={styles.link}
          state={{ from: path.current }}
        >
          Reviews
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default OneMovieCard;
