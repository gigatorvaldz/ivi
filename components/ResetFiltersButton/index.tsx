import React, { useEffect } from 'react';
import styles from './ResetFiltersButton.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { useAppDispatch } from '../../redux/hooks';
import { clearFilters } from '../../redux/features/filmList/filmList';

const ResetFiltersButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.resetFilters} onClick={() => { dispatch(clearFilters()) }}>
      <RxCross2 className={styles.resetIcon} />
      <span>Сбросить фильтры</span>
    </div>
  );
};

export default ResetFiltersButton;
