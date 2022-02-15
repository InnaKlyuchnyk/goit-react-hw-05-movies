import useFetchActorsCast from './useFetchActorsCast';

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w500';
const defaultImg =
  'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

const ActorCard = () => {
  const { cast, loading } = useFetchActorsCast();

  return (
    <div>
      {loading && <h2>Loading</h2>}
      <ul>
        {cast &&
          cast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? baseImgUrl + imgSize + actor.profile_path
                    : defaultImg
                }
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
