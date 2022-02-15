import { movieReviews } from '../../services/fetches';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useFetchReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchReviews = async () => {
      return await movieReviews(movieId)
        .then(setReviews)
        .finally(() => setLoading(false));
    };
    fetchReviews();
  }, [movieId]);

  return { reviews, loading };
};

export default useFetchReviews;
