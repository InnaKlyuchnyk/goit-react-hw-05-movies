import { movieActors } from '../../services/fetches';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useFetchActorsCast = () => {
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

export default useFetchActorsCast;
