import useFetchReviews from './useFetchReviews';

const Reviews = () => {
  const { reviews, loading } = useFetchReviews();

  return (
    <div>
      {loading && <h2>Loading</h2>}
      <ul>
        {reviews && reviews.results.length !== 0 ? (
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
