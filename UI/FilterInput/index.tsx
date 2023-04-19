import React, { useState } from 'react';
import styles from './FilterInput.module.scss';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import classNames from 'classnames';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

type FilterInputProps = {
  query: 'producer' | 'actor';
};

const FilterInput: React.FC<FilterInputProps> = ({ query }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  // const dispatch = useAppDispatch();
  // const searchQuery = useAppSelector(selectSearchQuery);

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="searchBarForm"
      className={classNames({ [styles.active]: searchValue || isFocused }, styles.form)}
    >
      <label className={styles.label}>
        <input
          type="text"
          value={searchValue}
          className={styles.searchBar}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target!.value)
          }
        />
        <span className={classNames({ [styles.inputFilled]: searchValue }, styles.placeholder)}>
          Поиск по {query === 'producer' ? 'режиссеру' : 'актеру'}
        </span>
      </label>
      <div
        className={classNames({ [styles.active]: searchValue }, styles.iconContainer)}
        onClick={() => setSearchValue('')}
      >
        {!searchValue && <BiSearch className={styles.icon} />}
        {searchValue && <IoCloseOutline className={styles.icon} />}
      </div>
    </form>
  );
};

export default FilterInput;
