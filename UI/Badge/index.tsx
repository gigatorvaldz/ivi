import React from 'react';
import styles from './Badge.module.scss';

const Badge = ({ name }: { name: string }) => {
  return (
    <div className={styles.container}>
      <p className={styles.badgeName}>{name}</p>
    </div>
  );
};

export default Badge;
