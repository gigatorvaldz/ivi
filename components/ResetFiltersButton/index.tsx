import React from 'react';
import styles from './ResetFiltersButton.module.scss';
import { RxCross2 } from 'react-icons/rx';

const ResetFiltersButton = () => {
  return (
    <div className={styles.resetFilters}>
      <RxCross2 className={styles.resetIcon} />
      <span>Сбросить фильтры</span>
    </div>
  );
};

export default ResetFiltersButton;
