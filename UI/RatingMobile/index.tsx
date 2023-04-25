import React from 'react';
import styles from './RatingMobile.module.scss';
import Link from 'next/link';

type RatingMobileProps = {
  rating: string | number;
  ratesCount?: number;
};

const RatingMobile: React.FC<RatingMobileProps> = ({ rating, ratesCount }) => {
  return (
    <Link href="/" className={styles.container}>
      <div className={styles.ratingPlate}>{rating}</div>
      <div className={styles.ratingDescription}>
        <h3 className={styles.caption}>Рейтинг Кинопоиска</h3>
        <p className={styles.subtitle}>Интересный сюжет</p>
        <p className={styles.ratingCount}>{ratesCount} оценок</p>
      </div>
      <div className={styles.rateButton}>
        Оценить
      </div>
    </Link>
  );
};

export default RatingMobile;
