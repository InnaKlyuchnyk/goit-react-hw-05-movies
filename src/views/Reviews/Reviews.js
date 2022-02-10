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

const Reviews = () => {
  const { reviews, loading } = useFetchReviews();

  return (
    <div>
      {loading && <h2>Loading</h2>}
      <ul>
        {reviews ? (
          reviews.results.map(review => (
            <li key={review.author}>
              <h5>Author: {review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
