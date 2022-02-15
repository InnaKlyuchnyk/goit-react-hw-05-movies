import { movieDetails } from '../../services/fetches';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  return { movie, loading, movieId };
};

export default useFetchOneMovieDetails;
