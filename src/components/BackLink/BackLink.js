import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import styles from './BackLink.module.css';
import { ReactComponent as GoBackIcon } from '../../icons/goBackIcon.svg';

const BackLink = () => {
  const location = useLocation();
  const path = useRef(location);

  return (
    <Link
      to={path?.current?.state?.from ?? '/'}
      className={styles.goBackButton}
    >
      <GoBackIcon width="24px" height="24px" className={styles.icon} />
      Go back
    </Link>
  );
};

export default BackLink;
