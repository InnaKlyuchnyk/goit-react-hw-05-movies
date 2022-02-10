import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieActors } from '../../services/fetches';

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w500';

const useFetchAcnjrsCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchCast = async () => {
      return await movieActors(movieId)
        .then(setCast)
        .finally(() => setLoading(false));
    };
    fetchCast();
  }, [movieId]);
  return { cast, loading };
};

const ActorCard = () => {
  const { cast, loading } = useFetchAcnjrsCast();
  //   console.log(cast.cast);

  return (
    <div>
      {loading && <h2>Loading</h2>}
      <ul>
        {cast &&
          cast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={baseImgUrl + imgSize + actor.profile_path}
                alt={actor.name}
                width="200px"
                height="auto"
              />
              <h4>{actor.name}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ActorCard;
