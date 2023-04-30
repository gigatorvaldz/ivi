import React, { useState } from 'react';
import styles from './SearchInput.module.scss';
import classNames from 'classnames';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import Input, { InputProps } from '../Input';

interface SearchInputProps extends InputProps {
};

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  function onChangeHandle(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.currentTarget.value);
  }

  return (
    <div className={styles.container}>
      <Input
        placeholder={placeholder}
        onChange={onChangeHandle}
        value={searchValue}
        aside={
          <div
            className={classNames({ [styles.active]: searchValue })}
            onClick={() => setSearchValue('')}
          >
            {!searchValue && <BiSearch className={styles.icon} />}
            {searchValue && <IoCloseOutline className={styles.icon} />}
          </div>
        }
      />
    </div>
  );
};

export default SearchInput;
