import React, { useState } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

export interface InputProps {
  placeholder: string;
  aside?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  invalid?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, aside, onChange, value, invalid }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={classNames(
        { [styles.active]: value || isFocused, [styles.invalid]: invalid },
        styles.form
      )}
    >
      <label className={styles.label}>
        <input
          type="text"
          value={value}
          className={styles.searchBar}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
        />
        <span className={classNames({ [styles.inputFilled]: value }, styles.placeholder)}>
          {placeholder}
        </span>
      </label>
      {aside && <div className={styles.iconContainer}>{aside}</div>}
    </div>
  );
};

export default Input;
