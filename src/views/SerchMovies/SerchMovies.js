import styles from './SerchMovies.module.css';

const SerchMovies = () => {
  return (
    <form className={styles.form}>
      <input></input>
      <button type="submit" className={styles.serchButton}>
        Serch
      </button>
    </form>
  );
};

export default SerchMovies;
