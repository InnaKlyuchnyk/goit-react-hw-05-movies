const OneMovieCard = movie => {
  return (
    <div>
      <img href="" alt="" />
      <h3>
        {movie.title} ({movie.release_date})
      </h3>
      <p>{movie.overview}</p>
      <p>{movie.genres.name}</p>
    </div>
  );
};

export default OneMovieCard;
