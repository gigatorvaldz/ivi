import React, { useState } from 'react';
import styles from './SearchInput.module.scss';
import classNames from 'classnames';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import Input, { InputProps } from '../Input';

interface SearchInputProps extends InputProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, setValue, onChange, value }) => {
  return (
    <div className={styles.container}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        aside={
          <div className={classNames({ [styles.active]: value })} onClick={() => setValue('')}>
            {!value && <BiSearch className={styles.icon} />}
            {value && <IoCloseOutline className={styles.icon} />}
          </div>
        }
      />
    </div>
  );
};

export default SearchInput;
